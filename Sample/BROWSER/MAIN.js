Sample.MAIN = METHOD({

	run : (params) => {
		
		iOSSafariLandscapeFix.Init(UUI.V_CENTER({
			style : {
				backgroundColor : '#666',
				height : '100%',
				textAlign : 'center',
				fontSize : 20
			},
			c : '스크롤을 위로 올려 화면 크기를 조정해주세요.'
		}));
		
		let sizeDom = DIV({
			style : {
				fontSize : 30
			}
		}).appendTo(BODY);
		
		EVENT('resize', RAR(() => {
			sizeDom.empty();
			sizeDom.append(INFO.getOSName() + ' : ' + WIN_WIDTH() + ' x ' + WIN_HEIGHT());
		}));
		
		DIV({
			style : {
				position : 'fixed',
				bottom : 0,
				fontSize : 30
			},
			c : '내 위치가 이상해!'
		}).appendTo(BODY);
	}
});
