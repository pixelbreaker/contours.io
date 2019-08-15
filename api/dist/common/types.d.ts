export interface ILatLon {
    lat: number;
    lon: number;
}
export interface IRecordedPoint {
    timestamp: Date;
    latlon: ILatLon;
}
export declare class LatLon implements ILatLon {
    lat: any;
    lon: any;
}
export declare class RecordedPoint implements IRecordedPoint {
    timestamp: any;
    latlon: any;
}
