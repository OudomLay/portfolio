'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // UPDATE THESE WITH YOUR CONTACT INFORMATION
  const phoneNumber = '+85593250922' // Replace with your phone number
  const linkedinUrl = 'https://www.linkedin.com/in/oudom-lay/' // Replace with your LinkedIn URL
  const facebookUrl = 'https://www.facebook.com/share/1DiEpspAhH/?mibextid=wwXIfr' // Replace with your Facebook URL
  const instagramUrl = 'https://www.instagram.com/__dom___dom?igsh=Z25sZGdlcXkxZHJy&utm_source=qr' // Replace with your Instagram URL
  const telegramUrl = 'https://t.me/Oudo3' // Replace with your Telegram link
  const emailAddress = 'layoudom2021@gmail.com' // Replace with your email

  const handlePhoneClick = () => {
    // Create a vcard (contact) that can be saved
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Dom
TEL:${phoneNumber}
END:VCARD`
    
    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'contact.vcf'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Dom - UX/UI Designer',
        text: 'Check out my portfolio!',
        url: window.location.href,
      }).catch(err => console.log('Share failed:', err))
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Website link copied to clipboard!')
    }
  }

  return (
    <footer className="px-6 py-12 md:px-8 md:py-16 lg:px-16 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Name and Copyright */}
          <div>
            <h3 className="text-2xl font-bold text-foreground">Dom.</h3>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} Lay Oudom. Crafted with precision.
            </p>
          </div>

          {/* Center - Social Icons */}
          <div className="flex gap-3">
            {/* Phone - Save Contact */}
            <button
              onClick={handlePhoneClick}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              aria-label="Save Phone Contact"
              title="Save my contact"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn Profile"
              title="Visit my LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Share Website */}
            <button
              onClick={handleShare}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              aria-label="Share Website"
              title="Share my website"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>

            {/* Telegram */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              aria-label="Telegram Profile"
              title="Message me on Telegram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.869 4.332-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.461c.54-.203 1.01.122.84.961z" />
              </svg>
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-6 text-sm text-foreground">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
