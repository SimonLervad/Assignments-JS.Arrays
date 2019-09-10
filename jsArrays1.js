function play(a) {
	let out = Math.random();
	out = Math.floor(out*a+1);
	return out;
}

let counter = [0, 0, 0, 0, 0, 0, 0]

flip = play(6);

if (flip === 1)
    counter[1]++;
else if (flip === 2)
    counter[2]++;
else if (flip === 3)
    counter[3]++;
else if (flip === 4)
    counter[4]++;
else if (flip === 5)
    counter[5]++;
else 
    counter[6]++;

console.table(counter);

