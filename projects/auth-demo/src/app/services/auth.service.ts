import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface TokenPayload {
  username: string;
  exp: number;
}

interface Credentials {
  username: string;
  password: string;
}

interface AuthInfo {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService,
              private jwtHelperService: JwtHelperService) { }

  public login(credentials: Credentials): Observable<TokenPayload> {
    return this.httpClient.post<AuthInfo>('/api/login', credentials).pipe(
      tap(authInfo => this.tokenService.setToken(authInfo.token)),
      map(authInfo => this.jwtHelperService.decodeToken(authInfo.token))
    );
  }

  public logout(): void {
    this.tokenService.removeToken();
  }

  public isLoggedIn(): boolean {
    const token: string | undefined = this.tokenService.getToken();
    return token && !this.jwtHelperService.isTokenExpired(token);
  }
}
