import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { getRandomString } from 'selenium-webdriver/safari';

@Injectable()
export class SharedService {
    private backgroundImages: string[] = [
        "http://cdn.gamer-network.net/2017/metabomb/shaft13locationguidelostsector.jpg",
        "http://www.allthingsxbox.net/wp-content/uploads/2017/03/destiny2banner.jpeg",
        "https://assets.vg247.com/current//2017/05/destiny_2_environments-4.jpg",
        "https://cdna.artstation.com/p/assets/images/images/007/396/514/large/dorje-bellbrook-db-destiny2-002.jpg?1505851061",
        "https://teambeyond.net/wp-content/uploads/2017/08/MercuryDestiny-1024x497.jpg"
    ]

    // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
        let index = this.getRandomIndex();
        console.log(index);
        document.getElementById("bg-img").style.backgroundImage = 'url(' + this.backgroundImages[index] +')';
    }
    getRandomIndex(): number {
        return Math.floor(Math.random() * this.backgroundImages.length); //(-1 from this...)
      }
}