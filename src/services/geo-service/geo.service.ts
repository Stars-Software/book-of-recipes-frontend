import { Geocode } from "../../modules/common/types/profile.types";

class GeolocationService {
  private supported: boolean;

  constructor() {
    this.supported = "geolocation" in navigator;
  }

  getCurrentPosition(): Promise<Geocode | null> {
    if (!this.supported) {
      console.log("Geolocation is not supported by this browser.");
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject("Error getting location: " + error.message);
        }
      );
    });
  }
}

export const geolocationService = new GeolocationService();
