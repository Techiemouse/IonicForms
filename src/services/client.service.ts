import { Injectable } from "@angular/core";

@Injectable()
export class ClientService {
    client: any;
    getClientList(done):any {
        let mockData = [
            { name: 'Red Ltd.', rooms: [{name:'Music Room'}, {name:'Cafetaria'}, {name:'Science Room'}]},
            { name: 'Blue Ltd.', rooms: [{name:'Music Room'}, {name:'Hallway'}, {name:'Classroom'}]},
            { name: 'Purple Ltd.', rooms: [{name:'Pool'}, {name:'Gymnasium'}, {name:'Auditorium'}]},
            { name: 'White Ltd.', rooms: [{name:'Auditorium'}, {name:'Gymnasium'}, {name:'Library'}]},
            { name: 'Grey Ltd.', rooms: [{name:'Music Room'}, {name:'Corridor'}, {name:'Art Room'}]}
        ]

        done(mockData)
    }

    setClient(client) {
        this.client = client;
    }

    getClient() {
        return this.client;      
    }
}