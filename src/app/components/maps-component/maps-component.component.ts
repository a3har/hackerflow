import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-maps-component',
  templateUrl: './maps-component.component.html',
  styleUrls: ['./maps-component.component.css']
})

export class MapsComponentComponent implements OnInit {
  title = "Current Location";
  lat:any;
  lng:any;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { 
    if (navigator)
    {
    
    }
  }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
  
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
  
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        });
      });
    });
  }


}
  
