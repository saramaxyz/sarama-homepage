module.exports = {
	content: ["./index.html"],
	darkMode: 'class', // or 'media' or 'class'
	mode: 'jit',
	theme: {
		fontFamily: {
			body: ['Jost', 'sans-serif'],
			display: ['Gilroy'],
		},
		extend: {
			colors: {
				"prm": "#00c9a7",
				"titleBlack": "#313131",
				"gray": "#474747",
				"gray100": "#171717",
				"gray200": "#383838",
				"blue": "#0066FF",
				"lightBlack": "#525252",
				"lightBlue": "#5499FF",
				"lightGray": "#989898",
			},
			fontSize: {
				'xs': '12px',
				'sm': '14px',
				'2sm': '15px',
				'base': '16px',
				'mmd': '18px',
				'md': '20px',
				'lg': '21px',
				'2lg': '24px',
				'3lg': '28px',
				'xl': '32px',
				'2xl': '56px',
				'fs58': '58px',
				'fs22': '22px',
				'fs45': '45px',
				'fs13': '13px',
				
				'3xl': '72px',
				'3xl2': '62px',
			},
			letterSpacing: {
				space3: '0.03em',
				space2: '0.02em',
				
			  },
			  boxShadow: {
				'4xl': '16px 25px 23px rgba(193, 200, 249, 0.25)',
			  }
		},
		variants: {
			extend: {},
		}
	}
}