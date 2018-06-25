import { Component, OnInit } from '@angular/core';
import { ListPicker } from "ui/list-picker";
import { DataService } from '~/services/data.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    moduleId: module.id,
    selector: '/admin-event-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})

export class AdminEventAddComponent implements OnInit {
    fromTime
    tillTime
    getyear = new Date().getFullYear()
    getyear1 = this.getyear + 1
    getyear2 = this.getyear + 2
    public year: Array<string> = ['year', this.getyear.toString(), this.getyear1.toString(), this.getyear2.toString()]; // current year + the next 2
    month =
        ['month', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    day = ['day', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
        '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    hour = ['hour', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
        '23', '24'];
    min = ['min', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
        '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
        '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '00'];

        public message = {
            message: '',
            identifier: '',
            imgLink:'',
            image: false,
            showFrom: String,
            showTill: String
        }
    private from = {
        fromYear: '',
        fromMonth: '',
        fromDay: '',
        fromHour: '',
        fromMin: ''
    }
    private till = {
        tillYear: '',
        tillMonth: '',
        tillDay: '',
        tillHour: '',
        tillMin: ''
    }

    public picked: string
    constructor(
        private data: DataService,
    private routerExtensions: RouterExtensions) {

    }

    public selectedIndexChanged(args, tmp?) {
        let picker = <ListPicker>args.object;
        

        switch (tmp) {
            case 'fromYear':
                this.from.fromYear = this.year[picker.selectedIndex];
                break;
            case 'fromMonth':
                this.from.fromMonth = this.month[picker.selectedIndex];
                break;
            case 'fromDay':
                this.from.fromDay = this.day[picker.selectedIndex];
                break;
            case 'fromHour':
                this.from.fromHour = this.hour[picker.selectedIndex];
                break;
            case 'fromMin':
                this.from.fromMin = this.min[picker.selectedIndex];
                break;
            case 'tillYear':
                this.till.tillYear = this.year[picker.selectedIndex];
                break;
            case 'tillMonth':
                this.till.tillMonth = this.month[picker.selectedIndex];
                break;
            case 'tillDay':
                this.till.tillDay = this.day[picker.selectedIndex];
                break;
            case 'tillHour':
                this.till.tillHour = this.hour[picker.selectedIndex];
                break;
            case 'tillMin':
                this.till.tillMin = this.min[picker.selectedIndex];
                break;
            default:
                break;
        }
        this.fromTime = this.from.fromYear + '-' + this.from.fromMonth + '-' + this.from.fromDay + 'T' + this.from.fromHour + ':' + this.from.fromMin;
        this.tillTime = this.till.tillYear + '-' + this.till.tillMonth + '-' + this.till.tillDay + 'T' + this.till.tillHour + ':' + this.till.tillMin;
    console.log(this.fromTime , this.tillTime)
    }
    ngOnInit() { }
    create(obj) {
        this.data.createMessage(obj).subscribe(()=>{
            this.navigate('/components/events')
        })
    }
    navigate(link) {
        // app logic here ...
        this.routerExtensions.navigate([link]);
        }
}
