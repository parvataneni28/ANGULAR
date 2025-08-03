import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Only cache GET requests
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.getCachedResponse(request.url);
    if (cachedResponse) {
      return of(new HttpResponse({ body: cachedResponse }));
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheResponse(request.url, event.body);
        }
      })
    );
  }

  private getCachedResponse(url: string): any {
    const cached = this.cache.get(url);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }
    return null;
  }

  private cacheResponse(url: string, data: any): void {
    this.cache.set(url, { data, timestamp: Date.now() });
  }
}