// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "untitled page gérez vos points de vente en simple clique coffee park vous offre une solution gestion adaptable selon supports analyse et rapports adapter besoins grâce la rubrique rapport êtes capable des consulter mouvements stock etc instantanément mail restos café lounge demandez votre version d’essaie gratuitement jours bloge nbsp fonctionalités accueil tarifs contact ", "");
   this[database_length++] = new SearchPage("blog_ouver.html", "Untitled Page", "untitled page categories donec eu elit in popular tags recherche blog suivi du temps de nouveaux outils pour mieux gérer vos heures travaillées demo user may lorem ipsum dolor sit amet conse ctetur adipisicing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident adam smith bloge nbsp fonctionalités accueil tarifs contact cofeepark mon sat am to pm get touch with us marmora road glasgow d04 gr ", "");
   this[database_length++] = new SearchPage("liste_blog.html", "Untitled Page", "untitled page blog article a3mal id comme reference la kol tabl avez vous intégré gestion des risques dans votre projet? est une étape indispensable du bon déroulement d’un projet suivi temps de nouveaux outils pour mieux gérer vos heures travaillées demo user may bloge nbsp fonctionalités accueil tarifs contact cofeepark mon sat am to pm get in touch with us marmora road glasgow d04 gr ", "");
   return this;
}
