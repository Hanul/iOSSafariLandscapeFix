# iOSSafariLandscapeFix
iOS Safari에서 가로화면 모드일 때 `position: fixed;`로 설정된 요소들의 위치가 잘못 설정되는 버그를 해결하기 위한 BOX

```javascript
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
```

![Screenshot](https://raw.githubusercontent.com/Hanul/iOSSafariLandscapeFix/master/img/1.png)
![Screenshot](https://raw.githubusercontent.com/Hanul/iOSSafariLandscapeFix/master/img/2.png)
![Screenshot](https://raw.githubusercontent.com/Hanul/iOSSafariLandscapeFix/master/img/3.png)
![Screenshot](https://raw.githubusercontent.com/Hanul/iOSSafariLandscapeFix/master/img/4.png)

## 설치하기
프로젝트의 `DEPENDENCY` 파일에 `Hanul/iOSSafariLandscapeFix`를 추가합니다.

## 소스코드
https://github.com/Hanul/iOSSafariLandscapeFix

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)