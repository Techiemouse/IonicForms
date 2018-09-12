import { Injectable } from "@angular/core";

@Injectable()
export class ClientService {

    getClient(clientId:string, done): any {
        let mockData = null;
        if (clientId == '1') {
            mockData= {
                name: 'Red',
                rooms: ['Music Room', 'Cafetaria', 'Science Room']
            };
          } else if (clientId === '2') {
            mockData = {
                name: 'Blue',
                rooms: ['Music Room', 'Hallway']
            };
          } else if (clientId === '3'){
            mockData = {
                name: 'Purple',
                rooms: ['Art Room', 'Gymnasium', 'Corridor']
            };
          };
          done(mockData);
    }
}