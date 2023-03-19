const dataIndex = {
    "indices":{
        'CDD': {
            'max': 40,
            'min': 0,
            'color': ['rgba(50, 136, 189, 1)',"rgba(102, 194, 165, 1)","rgba(171, 221, 164, 1)","rgba(230, 245, 152, 1)","rgba(255, 255, 191, 1)","rgba(254, 224, 139, 1)","rgba(253, 174, 97, 1)","rgba(244, 109, 67, 1)","rgba(213, 62, 79, 1)"],
            'unit': "Days"
        },
        'CSDI': {
            'max': 24,
            'min': 0,
            'color': ['rgba(50, 136, 189, 1)',"rgba(102, 194, 165, 1)","rgba(171, 221, 164, 1)","rgba(230, 245, 152, 1)","rgba(255, 255, 191, 1)","rgba(254, 224, 139, 1)","rgba(253, 174, 97, 1)","rgba(244, 109, 67, 1)","rgba(213, 62, 79, 1)"],
            'unit': "Days"
        },
        'CWD': {
            'max': 64,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'DTR': {
            'max': 16,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'FD0': {
            'max': 8,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'FD16': {
            'max': 208,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'ID0': {
            'max': 8,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'PRCPTOT': {
            'max': 2800,
            'min': 0,
            'color': ["#3288bd","#66c2a5","#abdda4","#e6f598","#ffffbf","#fee08b","#fdae61","#f46d43",'#d53e4f'],
            'unit': "mm"
        },
        'R10mm': {
            'max': 104,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'R20mm': {
            'max': 40,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'R25mm': {
            'max': 24,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'R95p': {
            'max': 1200,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "mm"
        },
        'R99p': {
            'max': 800,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "mm"
        },
        'RX1day': {
            'max': 440,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "mm"
        },
        'RX5day': {
            'max': 360,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "mm"
        },
        'SDII': {
            'max': 11,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "mm/Day"
        },
        'SU25': {
            'max': 360,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'SU35': {
            'max': 96,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'TMAXmean': {
            'max': 36,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'TMEANmean': {
            'max': 32,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'TMINmean': {
            'max': 28,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'TN10P': {
            'max': 8,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'TN90P': {
            'max': 33,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'TNn': {
            'max': 25,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'TNx': {
            'max': 28,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'TR20': {
            'max': 360,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'TR25': {
            'max': 360,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'TX10P': {
            'max': 11,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'TX90P': {
            'max': 32,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
        'TXn': {
            'max': 32,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'TXx': {
            'max': 40,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "°C"
        },
        'WSDI': {
            'max': 64,
            'min': 0,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': "Days"
        },
    },
    "SPI":{
        'spi':{
            'max': 2,
            'min': -2,
            'color': ['#d53e4f',"#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
            'unit': ""
        }
    }
}

export default dataIndex