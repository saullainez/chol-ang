import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleModuleGuard {
  constructor(
    private router: Router, 
    private storageService: StorageService,
    protected activatedRoute: ActivatedRoute
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)  {
      const uri = next.url[0].path;
      if (
        this.storageService.roleHasModule(uri)
      ) { return true; }
      this.router.navigateByUrl('/select-module');
      return false;
  }
  
}
