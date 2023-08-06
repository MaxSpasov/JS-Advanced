function walk (steps, stepLength, speed) {
    // every 500 mins - 1 min break
    let distanceInMeters = steps * stepLength;
    let speedInMetersPerSecond = speed / 3.6;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMetersPerSecond + rest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0': ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`); 
}
walk(4000, 0.60, 5)
walk