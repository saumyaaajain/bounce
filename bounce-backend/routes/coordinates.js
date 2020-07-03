var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    // console.log(req);
    const getHeight = (h, e) => {
        var n = 1;
        var h2 = Math.pow(e, 2*n) * h;
        var heights = [];
        var times = h > 10 || e === 1 ? h : 10;
        while(h2 > 0 && times >= 0){
            heights.push(h2);
            n++;
            h2 = Math.pow(e, 2*n) * h2;
            times--;
        }
        return getTime(h, e, heights.length, heights);
    }

    const getTime = (h, e, n, heights) => {
        const data = [];
        const v = 9.8;
        data.push({
            y: parseInt(h),
            x: 0
        });
        var velocity = v;
        var time = h/v;
        var initTime = time;
        for(var i=0; i<n; i++){
            velocity = e*v;
            time = heights[i]/velocity;
            data.push({
                y: 0,
                x: initTime
            });
            data.push({
                y: heights[i],
                x: initTime + time
            });
            initTime += 2*time;
        }
        return data;
    }
    const mapData = getHeight(req.query.height, req.query.e);
    console.log(mapData);
    res.json(mapData);
});

module.exports = router;