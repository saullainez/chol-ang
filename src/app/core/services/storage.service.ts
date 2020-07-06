import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { Router } from '@angular/router';
import { ModuleSession } from '../models/module-session';
import { Rolemodule } from '../models/rolemodule';
import { SysParam } from '../models/sys-param';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private currentSession: Session = null;
  private moduleSession: ModuleSession = null;
  private roleModule: Rolemodule = null;
  private sysParam: SysParam = null;

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

  getUserRole(): string {
    const userRole = this.getCurrentSession();
    return userRole && userRole.role && this.isValidSession() ? userRole.role : null;
  }

  setModuleSession(moduleSession: ModuleSession) {
    this.moduleSession = moduleSession;
    localStorage.setItem('module', JSON.stringify(moduleSession));
  }

  getModuleSession(): ModuleSession {
    const sessionModuleStorage = localStorage.getItem('module');
    return sessionModuleStorage ? <ModuleSession>JSON.parse(sessionModuleStorage) : null;
  }

  getCurrentModuleName(): string {
    const moduleSession = this.getModuleSession();
    return moduleSession && moduleSession.name ? moduleSession.name : null;
  }

  setRoleModule(rolemodule: Rolemodule){
    this.roleModule = rolemodule;
    localStorage.setItem('roleModule', JSON.stringify(rolemodule));
  }

  getRoleModule() : Rolemodule {
    const roleModule = localStorage.getItem('roleModule');
    return roleModule ? <Rolemodule>JSON.parse(roleModule) : null;
  }
   
  roleHasModule(moduleName: string): boolean{
    const roleModule = this.getRoleModule();
    const find = roleModule.modules.find(module => module.uri == moduleName )
    return find ? true : false
  }

  setSysParam(sys_param: SysParam){
    this.sysParam = sys_param;
    localStorage.setItem('sysParam', JSON.stringify(sys_param));
  }

  getSysParam(): SysParam{
    const sysParam = localStorage.getItem('sysParam');
    return sysParam ? <SysParam>JSON.parse(sysParam) : null;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigateByUrl('login');
  }
}
