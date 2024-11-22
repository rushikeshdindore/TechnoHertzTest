import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public barChartData = {
    labels: ['Valid', 'Renewal', 'Expired'],
    datasets: [
      {
        label: 'Count',
        data: [1800, 890, 2000],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336']
      }
    ]
  };

  public barChartOptions = {
    responsive: true,
  };
}

