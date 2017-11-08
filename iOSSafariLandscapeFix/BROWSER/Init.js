iOSSafariLandscapeFix.Init = METHOD({

	run : (dom) => {
		
		if (INFO.getOSName() === 'iOS' && INFO.getBrowserName() === 'Safari') {
			
			let content;
			let wrapper = DIV({
				style : {
					backgroundColor : '#000',
					position : 'absolute',
					left : 0,
					top : 0,
					width : '100%',
					height : 999999
				},
				c : content = DIV({
					c : dom
				})
			}).appendTo(BODY);
			
			EVENT('resize', RAR(() => {
				
				if (wrapper !== undefined) {
					wrapper.addStyle({
						visibility : 'hidden'
					});
				}
				
				let winWidth = WIN_WIDTH();
				let winHeight = WIN_HEIGHT();
				
				content.addStyle({
					height : winHeight
				});
				
				if (winWidth > winHeight && (
					(winWidth === 480 && winHeight !== 320) ||
					(winWidth === 568 && winHeight !== 320) ||
					(winWidth === 667 && winHeight !== 375) ||
					(winWidth === 736 && winHeight !== 414)
				)) {
					wrapper.addStyle({
						visibility : 'visible'
					});
				}
				
				scrollTo(0, 0);
			}));
			
			EVENT_LOW('touchstart', (e) => {
				if (wrapper.getStyle('visibility') === 'hidden') {
					e.stopDefault();
				}
			});
			
			EVENT_LOW('touchmove', (e) => {
				if (wrapper.getStyle('visibility') === 'hidden') {
					e.stopDefault();
				}
			});
		}
	}
});
