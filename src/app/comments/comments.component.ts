import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  displayedColumns: string[] = ['postId','name','email','body'];
  dataSource = new MatTableDataSource<any>();
  userid : string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  url:string='https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient, private act:ActivatedRoute) { 
  this.userid= this.act.snapshot.params['userId'];
  this.act.params.subscribe((data)=>{
    this.userid=data.userId;
    console.log(this.userid);
    this.http.get(this.url+'?postId='+this.userid).subscribe((data:any)=>{
      this.dataSource.data = data;
      console.log(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    })
  })
 
  }
  ngOnInit(): void {
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
