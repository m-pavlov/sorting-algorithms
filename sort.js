const types = {
    standart : require('./algorithms/standart'),
    bubble   : require('./algorithms/bubble'),
    selection: require('./algorithms/selection'),
    coctail  : require('./algorithms/coctail'),
    insertion: require('./algorithms/insertion'),
    gnome:     require('./algorithms/gnome'),
}

function sort(type, data){
    log('');
    log('Sorting algorithm: ' + type);

    printData( data );

    let t0 = getReadings();

    let new_data = types[type](data);

    let t1 =  getReadings();

    let delta = getDelta(t0, t1);

    log(`Execution time: ${delta.time} s.`);
    log(`Memory usage: ${delta.memory} Kb.`);

    printData( new_data );

    log('');
}

function printData(data){
    if (data.length < 50)  {
        log( JSON.stringify( data ) );
    }    
}

function log(str){
    console.log(str);
}

function getReadings(){
    var t = process.hrtime();

    return {
        seconds: t[0],
        nanoseconds: t[1],
        memory: process.memoryUsage().heapUsed
    }
}

function getDelta(t0, t1){
    return {
        time:   (t1.seconds - t0.seconds) + (t1.nanoseconds - t0.nanoseconds) / (1000 * 1000 * 1000),
        memory: Math.round( (t1.memory - t0.memory) / 1024 )
    }
}

module.exports = sort;