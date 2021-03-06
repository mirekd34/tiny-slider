var speed = 100,
    doc = document;

tns({
  container: doc.querySelector('.lazyload'),
  items: 3,
  edgePadding: 40,
  lazyload: true,
  speed: speed,
});
tns({
  container: doc.querySelector('.customize'),
  items: 3,
  controlsContainer: doc.querySelector('.customize-tools .controls'),
  navContainer: doc.querySelector('.customize-tools .thumbnails'),
  autoplay: true,
  autoplayButton: doc.querySelector('.playbutton-wrapper > button'),
  speed: speed,
});
tns({
  container: doc.querySelector('.autoHeight'),
  autoHeight: true,
  items: 1,
  speed: speed,
});

var tt = (function () {
  var my = {}, 
      div = doc.createElement('div'),
      ul = doc.createElement('ul'),
      li = doc.createElement('li'),
      edgepadding = 50,
      gutter = 10,
      // sliderSetting = {};
      sliderSetting= {
        'base': {
          container: '',
          speed: speed,
          items: 3,
          slideBy: 'page'
        },
        'gutter': {
          container: '',
          speed: speed,
          items: 3,
          gutter: gutter,
        },
        'edgePadding': {
          container: '',
          speed: speed,
          items: 3,
          edgePadding: edgepadding,
        },
        'edgePaddingGutter': {
          container: '',
          speed: speed,
          items: 3,
          gutter: gutter,
          edgePadding: edgepadding,
        },
        'nonLoop': {
          container: '',
          speed: speed,
          items: 3,
          loop: false,
        }, 
        'rewind': {
          container: '',
          speed: speed,
          items: 3,
          rewind: true,
        }, 
        'slideByPage': {
          container: '',
          speed: speed,
          items: 3,
          slideBy: 'page',
        }, 
        'fixedWidth': {
          container: '',
          speed: speed,
          fixedWidth: 300,
        }, 
        'fixedWidthGutter': {
          container: '',
          speed: speed,
          gutter: gutter,
          fixedWidth: 300,
        }, 
        'fixedWidthEdgePadding': {
          container: '',
          speed: speed,
          edgePadding: edgepadding,
          fixedWidth: 300,
        }, 
        'fixedWidthEdgePaddingGutter': {
          container: '',
          speed: speed,
          gutter: gutter,
          edgePadding: edgepadding,
          fixedWidth: 300,
        }, 
        'responsive': {
          container: '',
          speed: speed,
          responsive: {
            600: 2,
            900: 3,
          },
        }, 
        'arrowKeys': {
          container: '',
          speed: speed,
          items: 3,
          arrowKeys: true,
        },
        'autoplay': {
          container: '',
          speed: speed,
          items: 3,
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: speed * 9,
          autoplayText: ['▶', '❚❚'],
        }, 
        'vertical': {
          container: '',
          speed: speed,
          items: 3,
          axis: 'vertical',
        }, 
        'verticalGutter': {
          container: '',
          speed: speed,
          items: 3,
          axis: 'vertical',
          gutter: gutter,
        }, 
        'verticalEdgepadding': {
          container: '',
          speed: speed,
          items: 3,
          axis: 'vertical',
          edgePadding: edgepadding,
        }, 
        'verticalEdgepaddingGutter': {
          container: '',
          speed: speed,
          items: 3,
          axis: 'vertical',
          gutter: gutter,
          edgePadding: edgepadding,
        }, 
        'animation': {
          container: '',
          speed: speed * 10,
          items: 3,
          mode: 'gallery',
          arrowKeys: true,
          animateIn: 'jello',
          animateOut: 'rollOut',
          animateDelay: speed * 3,
        } 
      };

  my.createSliderHtml = function () {
    var htmlTemplate = doc.querySelector('.html_template'),
        sliderFragment = doc.createDocumentFragment(),
        docContainer = doc.querySelector('.container'),
        divider = docContainer.querySelector('.divider');

    for (i in sliderSetting) {
      var sd = htmlTemplate.cloneNode(true);
      sd.className = i + '_wrapper';
      sd.querySelector('h2').innerHTML = i;
      sd.querySelector('div').className = sd.querySelector('div').id = i;

      sliderFragment.appendChild(sd);
    }
    docContainer.insertBefore(sliderFragment, divider);
  };

  my.initSliders = function () {
    for (i in sliderSetting) {
      sliderSetting[i].container = doc.querySelector('#' + i);
      tns(sliderSetting[i]);
    }
  };

  return my;
})();

tt.createSliderHtml();
tt.initSliders();

// tns().events.on('transitionEnd', function(info) {
//   if (info.container.id === 'base') {
//     console.log(e.type, info.container.id);
//   }
// });

// document.querySelector('.responsive_wrapper [data-controls="next"]').addEventListener('click', function () {
//   var info = responsiveSD.getInfo();
//   alert(info.indexCached + ' : ' + info.index);
// }, false);

