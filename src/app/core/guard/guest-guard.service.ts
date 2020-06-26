import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service'

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService {  /**
   * Constructor
   * @param router El objeto router
   * @param storageService nuestro servicio del storage
   */
  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }  
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (
      !this.storageService.isAuthenticated()
    ) { return true; }
    this.router.navigateByUrl('/');
    return false;
  }
}