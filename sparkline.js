var sparkline = function(canvas_id, data, endpoint, color, style) {
	if (window.HTMLCanvasElement) {
		var c = document.getElementById(canvas_id),
			ctx = c.getContext('2d'),
			color = (color ? color : 'rgba(0,0,0,0.5)'),
			style = (style == 'bar' ? 'bar' : 'line'),
			height = c.height - 2,
			width = c.width,
			total = data.length,
			max = Math.max.apply(Math, data),
			xstep = width/total,
			ystep = max/height,
			x = 0,
			y = height - data[0]/ystep,
			i;
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.moveTo(x, y);
		for (i = 1; i < total; i = i + 1) {
			x = x + xstep;
			y = height - data[i]/ystep + 1;
			if (style == 'bar') { ctx.moveTo(x,height); }
			ctx.lineTo(x, y);
		}
		ctx.stroke();
		if (endpoint && style == 'line') {
			ctx.beginPath();
			ctx.fillStyle = 'rgba(255,0,0,0.5)';
			ctx.arc(x, y, 1.5, 0, Math.PI*2);
			ctx.fill();
		}
	}
};
