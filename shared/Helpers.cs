using ToSic.Razor.Blade;
using System.Linq;
using System;

public class Helpers: Custom.Hybrid.Code12 
{
  public void SetNotFoundHttpHeaders() {
    // Response.StatusCode = 404;
	// Response.TrySkipIisCustomErrors = true;
  }

  public void SetMetaDescAndTitle(dynamic term) {
    // HtmlPage.Title = (Text.Has(term.Abbreviation) ? term.Abbreviation + " – " : "") + term.title + " | " + HtmlPage.Title;
    // HtmlPage.AddMeta("description", term.summary);
  }
}