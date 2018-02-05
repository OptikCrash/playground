import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { includes } from 'lodash';

@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.html',
  styles: ['./../../../styles/sidenav.scss']
})
export class SideNav implements OnInit {
    constructor(private router: Router) {
    }
    public sideNavOpen: boolean = false;

    ngOnInit(): void {

    }

  sections=[{
    name: 'Site tree:',
    subsections: [{
      name: 'Home',
      state: 'home',
      class: 'material-icons',
      icon: 'home'
    },{
      name: 'About WDFW',
      state: 'about',
      class: 'material-icons',
      icon: 'pages',
      states: [{
        name: 'Contact Information',
        link: 'http://wdfw.wa.gov/about/contact/',
        class: 'fa fa-genderless'
      },{
        name: 'Our Mission',
        link: 'http://wdfw.wa.gov/about/mission_goals.html',
        class: 'fa fa-genderless'
      },{
        name: 'Fish & Wildlife Commission',
        link: 'http://wdfw.wa.gov/commission/',
        class: 'fa fa-genderless'
      },{
        name: 'Office of the Director',
        link: 'http://wdfw.wa.gov/about/director/',
        class: 'fa fa-genderless'
      },{
        name: 'Regional Operations',
        link: 'http://wdfw.wa.gov/about/regions/',
        class: 'fa fa-genderless'
      },{
        name: 'News Releases',
        link: 'http://wdfw.wa.gov/news/',
        class: 'fa fa-genderless'
      },{
        name: 'WDFW Publications',
        link: 'http://wdfw.wa.gov/publications/',
        class: 'fa fa-genderless'
      },{
        name: 'Strategic Planning',
        link: 'http://wdfw.wa.gov/about/strategic_plan/',
        class: 'fa fa-genderless'
      },{
        name: 'Budget & Finance',
        link: 'http://wdfw.wa.gov/about/budget/',
        class: 'fa fa-genderless'
      },{
        name: 'Contracts & Purchasing',
        link: 'http://wdfw.wa.gov/about/contracts/',
        class: 'fa fa-genderless'
      },{
        name: 'Rules Information Center',
        link: 'http://wdfw.wa.gov/about/regulations/',
        class: 'fa fa-genderless'
      },{
        name: 'Legislative Information',
        link: 'http://wdfw.wa.gov/about/legislative/',
        class: 'fa fa-genderless'
      },{
        name: 'Employment / Jobs',
        link: 'http://wdfw.wa.gov/employment/',
        class: 'fa fa-genderless'
      },{
        name: 'Public Disclosure',
        link: 'http://wdfw.wa.gov/about/public_disclosure/',
        class: 'fa fa-genderless'
      },{
        name: 'Grants & Incentives',
        link: 'http://wdfw.wa.gov/grants/',
        class: 'fa fa-genderless'
      },{
        name: 'Advisory Groups and\n\rManagement Boards',
        link: 'http://wdfw.wa.gov/about/advisory/',
        class: 'fa fa-genderless'
      },{
        name: 'Volunteer Opportunities',
        link: 'http://wdfw.wa.gov/about/volunteer/',
        class: 'fa fa-genderless'
      },{
        name: 'Logos & Images',
        link: 'http://wdfw.wa.gov/about/media/',
        class: 'fa fa-genderless'
      },{
        name: 'Employee Information',
        link: 'http://wdfw.wa.gov/about/employee/',
        class: 'fa fa-genderless'
      }]
    },{
      name: 'Conservation',
      state:'conservation',
      class: 'material-icons',
      icon: 'nature_people',
      states: [{
        name: 'Species & Ecosystem Science',
        link: 'http://wdfw.wa.gov/conservation/research/',
        class: 'fa fa-genderless'
      },{
        name: 'Species Recovery & Management',
        link: 'http://wdfw.wa.gov/conservation/species/',
        class: 'fa fa-genderless'
      },{
        name: 'Habitat Restoration & Protection',
        link: 'http://wdfw.wa.gov/conservation/habitat/',
        class: 'fa fa-genderless'
      },{
        name: 'WDFW Lands',
        link: 'http://wdfw.wa.gov/lands/',
        class: 'fa fa-genderless'
      },{
        name: 'Aquatic Invasive Species',
        link: 'http://wdfw.wa.gov/ais/',
        class: 'fa fa-genderless'
      },{
        name: 'Wildlife Health',
        link: 'http://wdfw.wa.gov/conservation/health/',
        class: 'fa fa-genderless'
      },{
        name: 'Climate Change',
        link: 'http://wdfw.wa.gov/conservation/climate_change/',
        class: 'fa fa-genderless'
      },{
        name: 'Maps & Data Products',
        link: 'http://wdfw.wa.gov/mapping/',
        class: 'fa fa-genderless'
      },{
        name: 'WDFW Publications',
        link: 'http://wdfw.wa.gov/publications/',
        class: 'fa fa-genderless'
      },]
    },{
      name: 'Fishing',
      state:'fishing',
      class: 'material-icons',
      icon: 'rowing',
      states: [{
        name: 'Fish Washington!',
        link: 'http://wdfw.wa.gov/fishing/washington/',
        class: 'fa fa-genderless'
      },{
        name: 'Regulations & Seasons',
        link: 'http://wdfw.wa.gov/fishing/regulations/',
        class: 'fa fa-genderless'
      },{
        name: 'Salmon/Steelhead',
        link: 'http://wdfw.wa.gov/fishing/salmon.html',
        class: 'fa fa-genderless'
      },{
        name: 'Saltwater',
        link: 'http://wdfw.wa.gov/fishing/saltwater.html',
        class: 'fa fa-genderless'
      },{
        name: 'Freshwater',
        link: 'http://wdfw.wa.gov/fishing/freshwater.html',
        class: 'fa fa-genderless'
      },{
        name: 'Shellfish',
        link: 'http://wdfw.wa.gov/fishing/shellfish/',
        class: 'fa fa-genderless'
      },{
        name: 'Commercial',
        link: 'http://wdfw.wa.gov/fishing/commercial',
        class: 'fa fa-genderless'
      },{
        name: 'Fishing Reports, Stocking<br>&nbsp;&nbsp;Reports & Fish Counts',
        link: 'http://wdfw.wa.gov/fishing/reports_plants.html',
        class: 'fa fa-genderless'
      },{
        name: 'Guides, Tips & Resources',
        link: 'http://wdfw.wa.gov/fishing/guides_tips.html',
        class: 'fa fa-genderless'
      },{
        name: 'Youth Fishing/Education',
        link: 'http://wdfw.wa.gov/fishing/youth.html',
        class: 'fa fa-genderless'
      },{
        name: 'Hatcheries',
        link: 'http://wdfw.wa.gov/hatcheries/',
        class: 'fa fa-genderless'
      },{
        name: 'Fisheries Management',
        link: 'http://wdfw.wa.gov/conservation/fisheries/',
        class: 'fa fa-genderless'
      },{
        name: 'Water Access Sites',
        link: 'http://wdfw.wa.gov/lands/water_access/',
        class: 'fa fa-genderless'
      },{
        name: 'Weekender Report',
        link: 'http://wdfw.wa.gov/weekender/',
        class: 'fa fa-genderless'
      },]
    },{
      name: 'Hunting',
      state:'hunting',
      class: 'material-icons',
      icon: 'panorama',
      states: [{
        name: 'Regulations & Seasons',
        link: 'http://wdfw.wa.gov/hunting/regulations/',
        class: 'fa fa-genderless'
      },{
        name: 'Special Permits & Raffles',
        link: 'http://wdfw.wa.gov/hunting/permits/',
        class: 'fa fa-genderless'
      },{
        name: 'Hunting Maps',
        link: 'http://wdfw.wa.gov/hunting/maps.html',
        class: 'fa fa-genderless'
      },{
        name: 'Hunting Prospects',
        link: 'http://wdfw.wa.gov/hunting/prospects/',
        class: 'fa fa-genderless'
      },{
        name: 'Game Management',
        link: 'http://wdfw.wa.gov/conservation/game/',
        class: 'fa fa-genderless'
      },{
        name: 'Game Species',
        link: 'http://wdfw.wa.gov/hunting/game_species/',
        class: 'fa fa-genderless'
      },{
        name: 'Hunter Education',
        link: 'http://wdfw.wa.gov/hunting/huntered/',
        class: 'fa fa-genderless'
      },{
        name: 'Master Hunter Permit Program',
        link: 'http://wdfw.wa.gov/hunting/masterhunter/',
        class: 'fa fa-genderless'
      },{
        name: 'Hunting Access',
        link: 'http://wdfw.wa.gov/hunting/hunting_access/',
        class: 'fa fa-genderless'
      },{
        name: 'Falconry',
        link: 'http://wdfw.wa.gov/hunting/falconry/',
        class: 'fa fa-genderless'
      },{
        name: 'Tribal Hunting & Co-Management',
        link: 'http://wdfw.wa.gov/hunting/tribal/',
        class: 'fa fa-genderless'
      },{
        name: 'Weekender Report',
        link: 'http://wdfw.wa.gov/weekender/',
        class: 'fa fa-genderless'
      },]
    },{
      name: 'Enforcement',
      state:'enforcement',
      class: 'material-icons',
      icon: 'security',
      states: [{
        name: 'Regulations & Seasons',
        link: 'http://wdfw.wa.gov/hunting/regulations/',
        class: 'fa fa-genderless'
      },{
        name: 'Special Permits & Raffles',
        link: 'http://wdfw.wa.gov/hunting/permits/',
        class: 'fa fa-genderless'
      },{
        name: 'Hunting Maps',
        link: 'http://wdfw.wa.gov/hunting/maps.html',
        class: 'fa fa-genderless'
      },{
        name: 'Hunting Prospects',
        link: 'http://wdfw.wa.gov/hunting/prospects/',
        class: 'fa fa-genderless'
      },{
        name: 'Game Management',
        link: 'http://wdfw.wa.gov/conservation/game/',
        class: 'fa fa-genderless'
      },{
        name: 'Game Species',
        link: 'http://wdfw.wa.gov/hunting/game_species/',
        class: 'fa fa-genderless'
      },{
        name: 'Hunter Education',
        link: 'http://wdfw.wa.gov/hunting/huntered/',
        class: 'fa fa-genderless'
      },{
        name: 'Master Hunter Permit Program',
        link: 'http://wdfw.wa.gov/hunting/masterhunter/',
        class: 'fa fa-genderless'
      },{
        name: 'Hunting Access',
        link: 'http://wdfw.wa.gov/hunting/hunting_access/',
        class: 'fa fa-genderless'
      },{
        name: 'Falconry',
        link: 'http://wdfw.wa.gov/hunting/falconry/',
        class: 'fa fa-genderless'
      },{
        name: 'Tribal Hunting & Co-Management',
        link: 'http://wdfw.wa.gov/hunting/tribal/',
        class: 'fa fa-genderless'
      },{
        name: 'Weekender Report',
        link: 'http://wdfw.wa.gov/weekender/',
        class: 'fa fa-genderless'
      }]
    },{
      name: 'Wildlife Viewing',
      state:'wildlife',
      class: 'material-icons',
      icon: 'visibility',
      states: [{
        name: 'Watchable Wildlife',
        link: 'http://wdfw.wa.gov/viewing/',
        class: 'fa fa-genderless'
      },{
        name: 'Viewing Guides & Maps',
        link: 'http://wdfw.wa.gov/viewing/guides/',
        class: 'fa fa-genderless'
      },{
        name: 'Report Wildlife Observations',
        link: 'http://wdfw.wa.gov/viewing/observations/',
        class: 'fa fa-genderless'
      },{
        name: 'WildWatch Cams',
        link: 'http://wdfw.wa.gov/wildwatch/',
        class: 'fa fa-genderless'
      },{
        name: 'Weekender Report',
        link: 'http://wdfw.wa.gov/weekender/',
        class: 'fa fa-genderless'
      },{
        name: 'Discover Pass',
        link: 'http://wdfw.wa.gov/licensing/discoverpass/',
        class: 'fa fa-genderless'
      },{
        name: 'Wildlife Areas',
        link: 'http://wdfw.wa.gov/lands/wildlife_areas/',
        class: 'fa fa-genderless'
      },{
        name: 'Water Access Sites',
        link: 'http://wdfw.wa.gov/lands/water_access/',
        class: 'fa fa-genderless'
      }]
    },{
      name: 'Licensing & Permits',
      state:'licensing',
      class: 'material-icons',
      icon: 'chrome_reader_mode',
      states: [{
        name: 'Online License Sales',
        link: 'https://fishhunt.dfw.wa.gov',
        class: 'fa fa-genderless'
      },{
        name: 'License Vendors',
        link: 'http://wdfw.wa.gov/licensing/vendors/',
        class: 'fa fa-genderless'
      },{
        name: 'Discover Pass',
        link: 'http://wdfw.wa.gov/licensing/discoverpass/',
        class: 'fa fa-genderless'
      },{
        name: 'Disability Licensing/Permits',
        link: 'http://wdfw.wa.gov/accessibility/',
        class: 'fa fa-genderless'
      },{
        name: 'Fishing Permits & Endorsements',
        link: 'http://wdfw.wa.gov/licensing/fishing.html',
        class: 'fa fa-genderless'
      },{
        name: 'Hunting & Trapping<br> &nbsp; Licensing/Permits',
        link: 'http://wdfw.wa.gov/licensing/hunting.html',
        class: 'fa fa-genderless'
      },{
        name: 'Road-kill Salvage Permit',
        link: 'http://wdfw.wa.gov/licensing/game_salvaging/',
        class: 'fa fa-genderless'
      },{
        name: 'Commercial Licensing',
        link: 'http://wdfw.wa.gov/licensing/commercial/',
        class: 'fa fa-genderless'
      },{
        name: 'Construction, Land Use,<br>&nbsp;&nbsp;Environmental Permits',
        link: 'http://wdfw.wa.gov/licensing/environmental.html',
        class: 'fa fa-genderless'
      },{
        name: 'Shellfish Import and<br> &nbsp;&nbsp;Transfer Permits',
        link: 'http://wdfw.wa.gov/licensing/shellfish_import_transfer/',
        class: 'fa fa-genderless'
      },{
        name: 'Private Fish Stocking and<br> &nbsp;&nbsp;Transport Permits',
        link: 'http://wdfw.wa.gov/licensing/fish_transport/',
        class: 'fa fa-genderless'
      },{
        name: 'Scientific Collection Permits',
        link: 'http://wdfw.wa.gov/licensing/scp/',
        class: 'fa fa-genderless'
      },{
        name: 'Mining and Prospecting',
        link: 'http://wdfw.wa.gov/licensing/mining/',
        class: 'fa fa-genderless'
      },{
        name: 'State Environmental Policy Act<br>&nbsp;&nbsp;(SEPA) Project Review',
        link: 'http://wdfw.wa.gov/licensing/sepa/',
        class: 'fa fa-genderless'
      }]
    },{
      name: 'Living with Wildlife',
      state:'living',
      class: 'material-icons',
      icon: 'hot_tub',
      states: [{
        name: 'Species Fact Sheets',
        link: 'http://wdfw.wa.gov/living/species/',
        class: 'fa fa-genderless'
      },{
        name: 'Attracting Wildlife',
        link: 'http://wdfw.wa.gov/living/attracting/',
        class: 'fa fa-genderless'
      },{
        name: 'Injured/Orphaned Wildlife',
        link: 'http://wdfw.wa.gov/conservation/health/rehabilitation/',
        class: 'fa fa-genderless'
      },{
        name: 'Nuisance Wildlife',
        link: 'http://wdfw.wa.gov/living/nuisance/',
        class: 'fa fa-genderless'
      },{
        name: 'Damage Claims',
        link: 'http://wdfw.wa.gov/living/damage/',
        class: 'fa fa-genderless'
      },{
        name: 'Dangerous Wildlife',
        link: 'http://wdfw.wa.gov/living/dangerous/',
        class: 'fa fa-genderless'
      },{
        name: 'Wildlife Interaction Rules',
        link: 'http://wdfw.wa.gov/living/rules/',
        class: 'fa fa-genderless'
      },{
        name: 'Wildlife Diseases',
        link: 'http://wdfw.wa.gov/conservation/health/',
        class: 'fa fa-genderless'
      },{
        name: 'Living with Wildlife Book Sales',
        link: 'http://wdfw.wa.gov/living/book/',
        class: 'fa fa-genderless'
      }]
    }]
  }, {
    name: 'Connect:',
    subsections: [{
      name: 'Youtube',
      link: 'https://www.youtube.com/',
      class: 'fa fa-youtube bds-youtube'
    },{
      name: 'Facebook',
      link: 'https://www.facebook.com/',
      class: 'fa fa-facebook-official bds-facebook'
    }, {
      name: 'Twitter',
      link: 'https://twitter.com/',
      class: 'fa fa-twitter-square bds-twitter'
    }, {
      name: 'Instagram',
      link: 'https://www.instagram.com/',
      class: 'fa fa-instagram bds-instagram'
    }, {
      name: 'Google+',
      link: 'https://plus.google.com/',
      class: 'fa fa-google-plus-square bds-g-plus'
    }]
  }]

  public toggle() {
      this.sideNavOpen =! this.sideNavOpen;
  }
  
  navigateTo(subsection) {
      this.toggle();
      if (subsection.state) {
          this.router.navigate([`/${subsection.state}`]);
      } else {
          window.location.assign(subsection.link);
      }
  }

}