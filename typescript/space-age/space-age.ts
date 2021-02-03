class SpaceAge {
  seconds: number;

  constructor (seconds: number) {
    this.seconds = seconds;
  }

  onEarth = (): number => +(this.seconds / 31557600).toFixed(2);
  onMercury = (): number => +(this.onEarth() / 0.2408467).toFixed(2);
  onVenus = (): number => +(this.onEarth() / 0.61519726).toFixed(2);
  onMars = (): number => +(this.onEarth() / 1.8808158).toFixed(2);
  onJupiter = (): number => +(this.onEarth() / 11.862615).toFixed(2);
  onSaturn = (): number => +(this.onEarth() / 29.447498).toFixed(2);
  onUranus = (): number => +(this.onEarth() / 84.016846).toFixed(2);
  onNeptune = (): number => +(this.onEarth() / 164.79132).toFixed(2);
};

export default SpaceAge;