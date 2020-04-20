export class Property {
  propertyId: number;
  listingId: string;
  details: {
    propertyType: any;
    status: any;
    dateUpdated: string;
    shortDescription: string;
    fullDescription: string;
    bathrooms: number;
    bedrooms: number;
    receptionRooms: number;
    price: number;
    priceQualifier: string;
    latitude: number;
    longitude: number;
    displayAddress: string;
    creatingAgentId: string;
    address: {
      udprn: number;
      paon: string;
      saon: string;
      street: string;
      locality: string;
      town: string;
      district: string;
      county: string;
      postcode: string
    };
    propertyAttributes: [
      {
        id: number;
        type: number;
        valueText: string;
        valueBoolean: boolean;
        valueInt: number;
        valueDecimal: number
      }
    ];
    features: [
      string
    ];
    media: [
      {
        dateUpdated: string;
        url: string;
        mediaType: string;
        mimeType: string
      }
    ]
  }
}
