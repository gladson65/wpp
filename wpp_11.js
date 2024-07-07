function strictOrSoft(x, y, z) {

    if (y > x && z > y) {
        console.log("strict mode");
    }

    else if (y < x && z > y) {
        console.log("soft mode")
    }

    else {
        console.log("undefined")
    }
}

strictOrSoft(50, 21, 15);