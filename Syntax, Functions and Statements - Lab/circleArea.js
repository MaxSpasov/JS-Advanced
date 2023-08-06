function circleArea(params) {
    if (typeof params === "number") {
        var area = Math.PI * Math.pow(params, 2);
        console.log(area.toFixed(2));
      } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof params}.`);
      }
    }
circleArea('name')