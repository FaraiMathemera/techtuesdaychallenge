import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Vehicles } from 'src/app/types/types';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  // AWSKey = process.env.AWSAccessKeyId;
  // AWSSecret = process.env.AWSSecretKey;
  // AWSRegion = process.env.region;
  // AWSVehicleTable = process.env.tableName;

  AWSKey = 'AKIAXRLG23VE2UBSWSWA';
  AWSSecret = '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';
  AWSRegion = 'us-east-2';
  AWSVehicleTable = 'DriveThroughVehicles';

  dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: this.AWSRegion,
    accessKeyId: this.AWSKey,
    secretAccessKey: this.AWSSecret,
  });

  params = {
    TableName: this.AWSVehicleTable,
  };

  constructor() {}

  async getVehicle() {
    // let queryExecute = new Promise((res, rej) => {
    //   this.dynamoDB.scan(this.params as any, function (err, data) {
    //     if (err) {
    //       console.log('Error', err);
    //       rej(err);
    //     } else {
    //       console.log('Success! Scan method fetch data from dynamodb');
    //       res(JSON.stringify(data, null, 2));
    //     }
    //   });
    // });
    // const result = await queryExecute;
    // console.log(result);
  }

  async getOrders(): Promise<Vehicles[]> {
    const order: Vehicles[] = [];
    return order;
  }
}
