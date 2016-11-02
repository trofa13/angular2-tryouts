import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    private isAuth: boolean = false;
    public login(){
        localStorage.setItem('auth', 'true');
        this.isAuth = true;
    }
    public logout(){
        try {
            localStorage.removeItem('auth');
        } catch(e){
          console.warn(e)
        } finally {
            this.isAuth = false;
        }
    }
    get isLoggedIn(){
        return this.isAuth;
    }
}
