export class DistanceBetweenCitiesInitialData {
    public constructor(
        public cities: CityTransfer[]
    ) {

    }
}

export class CityTransfer {
    public constructor(
        public id: number,
        public address: string,
        public latitude: number,
        public longitude: number
    ) {

    }
}

export class DistanceBetweenCitiesRequest {
    public constructor(
        public city1Id: number,
        public city2Id: number,
        public speed: number
    ) { }
}
