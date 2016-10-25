		resizenavigator();
	
		function resizenavigator()
		{		
			var width = document.body.clientWidth;
			var right = document.getElementById("rightid");
			var left = document.getElementById("leftid");
			right.style.width = (width - left.clientWidth) + "px";
//			right.style.height = left.clientHeight + "px";
		}
