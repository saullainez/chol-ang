import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private currentSession: Session = null;

  constructor(private router: Router) { }

  setCurrentSession(session: Session){
    this.currentSession = session;
    localStorage.setItem('currentSession', JSON.stringify(session));
  }

  getCurrentSession(): Session{
    const currentSession = localStorage.getItem('currentSession');
    return currentSession ? <Session>JSON.parse(currentSession) : null;
  }

  removeCurrentSession() {
    localStorage.removeItem('currentSession');
    this.currentSession == null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentToken() != null ? true : false
  }

  isValidSession(): boolean {
    const session = this.getCurrentSession();
    const now = new Date();
    const expires_at = new Date(session.expires_at);
    return expires_at <= now ? false : true;
  }

  getCurrentToken(): string {
    const session = this.getCurrentSession();
    return session && session.token && this.isValidSession() ? session.token : null;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigateByUrl('login');
  }
}
