require "json"
class Builders::Inspectors < SiteBuilder
  def build
    inspect_html do |document|
      grab_headers(document)
      mark_external(document)
      syntax_highlight(document)
      add_preview_buttons(document)
      apply_base_path_to_anchors(document)
    end
  end

  def mark_external(document)
    document.css("a[href^='http']").each do |anchor|
      next unless anchor[:href]&.starts_with?("http") && !anchor[:href]&.include?(site.config.url)

      anchor[:target] = "_blank"
      anchor[:rel] = "nofollow noopener noreferrer"

      next if anchor.css("external-icon")[0]
      next if anchor[:"no-external-icon"]

      anchor << " <external-icon></external-icon>"
    end
  end

  def syntax_highlight(document)
    document.css(":not(.syntax-block) > div.highlighter-rouge").each do |el|
      text = el.inner_text
      lang = el["class"].scan(/\s?language-.*\s/).last

      lang = lang.strip.split("-")[1] if lang

      lang = Syntax.full_language(lang)
      id = SecureRandom.uuid

      el.wrap("<div class='syntax-block'></div>")

      actions = <<-HTML
        <div class='syntax-block__actions'>
          <div class='syntax-block__badge'>
            #{lang}
          </div>

          <clipboard-copy
            for='#{id}'
            class='button clipboard clipboard--idle syntax-block__clipboard'
            aria-label='Copy to clipboard'
            data-controller='clipboard'
          >
            <sl-icon class='clipboard__icon--success' name='clipboard-check'></sl-icon>
            <sl-icon class='clipboard__icon--idle' name='clipboard'></sl-icon>
          </clipboard-copy>

          <script type="text/plain" id='#{id}' hidden>#{CGI.escape_html(text)}</script>
        </div>
      HTML

      el.add_previous_sibling(actions)
    end
  end

  def grab_headers(document)
    table_of_contents = document.css(".doc #table-of-contents ol")[0]
    mobile_menu = document.css(".side-nav--mobile .side-nav__menu")[0]

    # This isn't great. but works for my case :shrug:
    document.css("main").css("h2[id],h3[id],h4[id],h5[id],h6[id]").each do |heading|
      text = heading.inner_text

      level = heading.name.split(/h/)[1]

      unless heading.css("a")[0]
        heading.content = ""
        anchor = %(
          <a href='##{heading[:id]}'>#{text}</a>
        )

        heading << anchor
      end

      side_anchor = %(
        <a href='##{heading[:id]}' class='side-nav__link' style="">#{text}</a>
      )

      item = document.create_element("li", "", class: "side-nav__item", "data-level": level.to_s)
      item << side_anchor

      table_of_contents << item

      # we'll get here.
      # list = document.create_element("ul", "", class: "side-nav__category-menu")
      # list << item
      # mobile_menu.before list
    end
  end

  def add_preview_buttons(document)
    preview = document.css("light-preview")

    preview.each do |el|
      id = "checkbox-" + SecureRandom.uuid.slice(0, 16).to_s
      html = <<~HTML
        <div slot="above-expanded-code">
          <codepen-button></codepen-button>
          <stackblitz-button></stackblitz-button>
          <form-control>
            <input id="#{id}" type="checkbox" data-controller="direction-switcher">
            <label for="#{id}" aria-label="Toggle right to left">RTL</label>
          </form-control>
        </div>
      HTML

      el << html
    end
  end

  def apply_base_path_to_anchors(document)
    document.css("a[href^='/']").each do |anchor|
      href = anchor[:href]
      next if href.starts_with?(site.base_path)

      anchor[:href] = site.base_path.gsub(/\/$/, "") + href
    end
  end
end
