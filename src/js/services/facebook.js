'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  return {
    popup: true,
    shareText: {
      'bg': 'cподеляне',
      'cs': 'sdílet',
      'da': 'del',
      'de': 'teilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': '共有',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'partajează',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'facebook',
    faPrefix: 'svg-icon',
    faName: 'svgs_brands_facebook-f',
		svg: '<svg viewBox="0 0 320 512" class="bi brands-facebook-f" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',
    title: {
      'bg': 'Сподели във Facebook',
      'cs': 'Sdílet na Facebooku',
      'da': 'Del på Facebook',
      'de': 'Bei Facebook teilen',
      'en': 'Share on Facebook',
      'es': 'Compartir en Facebook',
      'fi': 'Jaa Facebookissa',
      'fr': 'Partager sur Facebook',
      'hr': 'Podijelite na Facebooku',
      'hu': 'Megosztás Facebookon',
      'it': 'Condividi su Facebook',
      'ja': 'フェイスブック上で共有',
      'ko': '페이스북에서 공유하기',
      'nl': 'Delen op Facebook',
      'no': 'Del på Facebook',
      'pl': 'Udostępnij na Facebooku',
      'pt': 'Compartilhar no Facebook',
      'ro': 'Partajează pe Facebook',
      'ru': 'Поделиться на Facebook',
      'sk': 'Zdieľať na Facebooku',
      'sl': 'Deli na Facebooku',
      'sr': 'Podeli na Facebook-u',
      'sv': 'Dela på Facebook',
      'tr': 'Facebook\'ta paylaş',
      'zh': '在Facebook上分享',
    },
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + url + shariff.getReferrerTrack()
  }
}
