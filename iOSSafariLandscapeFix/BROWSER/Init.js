iOSSafariLandscapeFix.Init = METHOD({

	run : (dom, handlers) => {
		//REQUIRED: dom
		//OPTIONAL: handlers
		//OPTIONAL: handlers.pause
		//OPTIONAL: handlers.resume
		
		let pauseHandler;
		let resumHandler;
		
		if (handlers !== undefined) {
			pauseHandler = handlers.pause;
			resumHandler = handlers.resume;
		}
		
		if (INFO.getOSName() === 'iOS' && INFO.getBrowserName() === 'Safari') {
			
			let content;
			let wrapper = DIV({
				style : {
					backgroundColor : '#000',
					position : 'absolute',
					left : 0,
					top : 0,
					width : '100%',
					height : 9999999,
					zIndex : 9999999,
					visibility : 'hidden'
				},
				c : content = DIV({
					c : dom
				})
			}).appendTo(BODY);
			
			EVENT('resize', RAR(() => {
				
				let winWidth = WIN_WIDTH();
				let winHeight = WIN_HEIGHT();
				
				content.addStyle({
					height : winHeight
				});
				
				if (winWidth > winHeight && (
					// iPhone 4
					(winWidth === 480 && winHeight !== 320) ||
					// iPhone 5
					(winWidth === 568 && winHeight !== 320) ||
					// iPhone 6, 7, 8
					(winWidth === 667 && winHeight !== 375) ||
					// iPhone 6, 7, 8 Plus
					(winWidth === 736 && winHeight !== 414) ||
					// iPhone X
					(winWidth === 812 && winHeight !== 375)
				)) {
					wrapper.addStyle({
						visibility : 'visible'
					});
					
					if (pauseHandler !== undefined) {
						pauseHandler();
					}
				}
				
				else {
					wrapper.addStyle({
						visibility : 'hidden'
					});
					
					if (resumHandler !== undefined) {
						resumHandler();
					}
				}
				
				scrollTo(0, 0);
			}));
			
			DELAY(1, () => {
				EVENT.fireAll('resize');
			});
		}
	}
});
