function startGSMLayer() {
  const $body = window.document.querySelector('body')
  const $cta = window.document.querySelector('#gsmLayerCTA')

  if (!$cta) {
    console.log('GSM Layer Error: CTA is missing')
    return
  }

  const iframeContainer = `
    <div id="gsmLayer"style="display: none" status="disabled">
      <iframe src="https://www.google.com.br"></iframe>
    </div>
  `

  const range = document.createRange()
  const fragment = range.createContextualFragment(iframeContainer)

  $cta.addEventListener('click', () => {
    const $container = window.document.querySelector('#gsmLayer')
    const status = $container.getAttribute('status')

    if (!status) {
      console.log('GSM Layer Error: Malformed container')
      return
    }

    if (status == 'disabled') {
      $container.style.display = 'flex'
      $container.setAttribute('status', 'enabled')
    } else {
      $container.style.display = 'none'
      $container.setAttribute('status', 'disabled')
    }
  })

  console.log('GSM Layer Initialized')
  const $el = $body.appendChild(fragment)
}

startGSMLayer()
