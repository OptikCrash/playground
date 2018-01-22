import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ThemeService {
    public themeList: string[] = ['light-theme', 'dark-theme', 'candy-theme'];
    public theme: string = 'candy-theme';
    private subject: Subject<string> = new Subject<string>();

    constructor() {
        this.setTheme();
    }
    setSubject() {
        this.subject.next(this.theme);
    }
    getSubject() {
        return this.subject.asObservable();
    }
    public setTheme(theme?: string) {
        this.theme = (theme === null) ? 'candy-theme' : theme;
    }
}