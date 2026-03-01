// ============================================
// BASE DE DONNÉES COMPLÈTE DES SUJETS TCF
// ============================================

// Combinaisons complètes (par session) - Extraites du document fourni
const combinaisonsTCF = [
    // Combinaison 9 - Janvier 2024 (première du document)
    {
        id: "combinaison-9-janvier2024",
        nom: "Combinaison 9 - Janvier 2024",
        tache1: "France Télévisions prépare un reportage sur le sport amateur. Et vous, quel sportif êtes-vous ? Envoyez-nous vos témoignages sur francetelevisions.fr.",
        tache2: "Vous avez passé des vacances formidables dans une belle région de votre pays. Vous écrivez un message à vos amis dans lequel vous racontez votre expérience. Vous expliquez pourquoi vous avez beaucoup aimé ce séjour.",
        tache3: {
            question: "Les écoles privées ou publiques ?",
            document1: "À la rentrée, le nombre d'élèves inscrits dans des écoles privées a augmenté en France. Le succès des établissements privés n'est pas directement lié aux bons résultats scolaires de leurs élèves. C'est la réputation de ces lieux qui explique un tel enthousiasme. Aux yeux de nombreux parents, les élèves y sont mieux encadrés, mieux surveillés et les professeurs sont plus présents. Les parents sont aussi rassurés parce que les classes sont homogènes: elles accueillent généralement des élèves de milieux sociaux favorisés. En effet, les études dans ces établissements sont payantes, ce qui n'est pas le cas dans les écoles publiques.",
            document2: "Dans les collèges privés, il y a peu d'élèves de milieux sociaux défavorisés. Comme les études dans ces établissements sont payantes, certaines catégories de population en sont exclues. Ce système qui oppose écoles publiques et écoles privées ne facilite pas la mixité sociale. Ainsi, les élèves du privé ont rarement l'occasion de rencontrer d'autres jeunes issus de milieux sociaux moins favorisés qu'eux et inversement. Ce modèle scolaire reproduit les inégalités sociales et renforce le sentiment d'exclusion de certains jeunes."
        }
    },
    
    // Combinaison 8 - Janvier 2024
    {
        id: "combinaison-8-janvier2024",
        nom: "Combinaison 8 - Janvier 2024",
        tache1: "Vous avez mis en ligne une annonce pour la location de votre appartement. Écrivez un courriel à une personne intéressée pour lui donner les informations sur l'appartement et le quartier.",
        tache2: "Vous venez de commencer les cours à l'université à Montréal, écrivez un message à votre ami pour lui raconter votre première semaine à l'université.",
        tache3: {
            question: "Les animaux de compagnie pour les enfants, pour ou contre ?",
            document1: "Offrir un animal de compagnie à un enfant présente de nombreux avantages, comme le soulignent beaucoup de psychologues. Pour des enfants qui n'ont pas des frères et/ou des sœurs, l'animal est un compagnon qui leur évitera la solitude. Grâce à lui, un enfant prendra confiance en lui et il apprendra vite qu'un animal est un être vivant qui a besoin d'attention et de respect. En sa présence, l'enfant se sentira en sécurité et pourra agir de manière autonome, sans l'aide de ses parents.",
            document2: "Beaucoup d'enfants demandent, un jour ou l'autre, un animal à leurs parents, le plus souvent un chien ou un chat. Mais même si vous avez envie de faire plaisir à votre enfant, il vaut mieux réfléchir sérieusement avant d'acheter un animal domestique. L'animal devient un nouveau membre de la famille et représente un engagement sur de nombreuses années. Or, avoir un animal coûte souvent très cher, et c'est une grande responsabilité. On ne peut pas le traiter comme un jouet que l'on met à la poubelle quand l'enfant s'en désintéresse."
        }
    },
    
    // Combinaison 7 - Janvier 2024
    {
        id: "combinaison-7-janvier2024",
        nom: "Combinaison 7 - Janvier 2024",
        tache1: "Écrivez un message à votre ami pour lui décrire le programme de vos prochaines vacances.",
        tache2: "Écrivez un article de blog sur un événement auquel vous avez assisté dernièrement (fête, festival, ...)",
        tache3: {
            question: "Le vélo en ville, pour ou contre?",
            document1: "Quand on parle de vélo, on pense systématiquement à deux choses: sport et loisir. On oublie souvent que c'est avant tout un mode de déplacement personnel et professionnel. En ville, c'est un moyen de transport rapide et déstressant puisqu'il permet d'éviter les interminables embouteillages aux heures de pointe. Se rendre au travail tout en faisant du sport, histoire de joindre l'utile à l'agréable.",
            document2: "Avec tous les accidents de la route observés annuellement, sortir son vélo pour se déplacer avec en ville peut être très dangereux. En effet, avec la densité importante de véhicules, le non-respect du Code de la route et le manque de pistes cyclables, pratiquer du vélo en zone urbaine présente de vrais risques d'accident. De plus, faire du vélo de nos jours, c'est s'exposer à des gaz d'échappement toxiques et nocifs pour la santé humaine (notamment le monoxyde de carbone...)."
        }
    },
    
    // Combinaison 6 - Janvier 2024
    {
        id: "combinaison-6-janvier2024",
        nom: "Combinaison 6 - Janvier 2024",
        tache1: "Écrivez un message à votre ami pour lui raconter votre entretien d'embauche.",
        tache2: "Gagnez deux billets pour la destination de votre choix avec la compagnie Air Tropiques. Racontez votre plus beau voyage sur notre forum. Écrivez un message sur le forum de la compagnie Air Tropiques. Vous racontez votre plus beau voyage (destination, activités, ...) et vous dites pourquoi...",
        tache3: {
            question: "L'école à domicile, pour ou contre?",
            document1: "Les raisons qui poussent les parents à opter pour la scolarisation à domicile sont nombreuses. Elle donne la possibilité d'adopter une pédagogie plus individualisée. On peut passer plus de temps sur les points sur lesquels l'enfant bute ou lui proposer, à l'occasion, des jeux éducatifs. L'enfant gère son apprentissage à son rythme, il creuse les sujets qui le passionnent et ne subit pas la pression des autres élèves qui peuvent avancer plus au moins vite que lui. Autre avantage de l'instruction en famille, une évolution différente. Avec l'école à la maison, pas de notes qui peuvent parfois être décourageantes, mais un contrôle continu des connaissances, pas de stress dû aux évaluations et aux devoirs.",
            document2: "Le choix de la scolarisation à domicile représente un véritable défi et donc, quelques inconvénients à prendre en compte avant de se lancer. La scolarisation à domicile nécessite beaucoup de temps, une bonne organisation et elle a aussi un coût. Tout le matériel, les livres, les manuels, et les sorties sont à la charge des familles, et l'un des deux parents est souvent amené à mettre entre parenthèses son emploi. Au total, l'école à domicile coûte généralement plus cher qu'une scolarisation dans le public. De plus, l'enfant ne côtoie pas de camarades au quotidien, car l'école à domicile ne permet pas à l'enfant d'entrer en interaction avec d'autres enfants comme il le ferait dans un cadre scolaire classique."
        }
    },
    
    // Combinaison 1 - Février 2024
    {
        id: "combinaison-1-fevrier2024",
        nom: "Combinaison 1 - Février 2024",
        tache1: "Je vais bientôt vivre dans ton quartier. Je cherche un endroit sympathique pour faire mes courses. Est-ce que tu connais un marché intéressant ? Merci d'avance et à bientôt ! Bernard",
        tache2: "Vous faites partie d'une association de quartier qui propose des activités aux enfants (aide aux devoirs, sorties, jeux, etc.) Sur votre site internet, vous racontez votre expérience et vous expliquez pourquoi ce type d'association est utile.",
        tache3: {
            question: "Le livre papier ou le livre numérique?",
            document1: "Depuis plusieurs années maintenant, de nombreux lecteurs ont décidé de remplacer la bibliothèque traditionnelle par des livres numériques. Selon eux, l'avantage est avant tout économique. D'une part, le livre numérique permet d'économiser du papier, d'autre part la version numérique d'un livre est généralement moins chère que la version papier. Les livres numériques ont un autre avantage : ils permettent une ouverture sur le monde pour les personnes en situation de handicap. Certaines options, comme la possibilité d'augmenter la taille des lettres, facilitent la lecture pour les personnes malvoyantes.",
            document2: "Le livre numérique remplacera-t-il le livre papier ? « Non », répondront la plupart des lecteurs. Le livre papier est un beau support. Quel plaisir de le prêter aux gens qu'on aime ou de l'offrir en glissant un petit mot dedans ! Le livre papier a une histoire, l'odeur du neuf ou de l'ancien... Il transmet beaucoup d'émotions alors que le livre numérique à un côté un peu impersonnel. De plus, les livres numériques demandent de posséder un minimum de connaissances en informatique, ce qui peut être une difficulté pour certaines personnes."
        }
    }
];

// Base de données complète des sujets par session (extraits du document)
const sujetsTCF = {
    // Tâche 1 - Message Simple (60-120 mots)
    1: [
        // Janvier 2024
        {session: "Janvier 2024", question: "France Télévisions prépare un reportage sur le sport amateur. Et vous, quel sportif êtes-vous ? Envoyez-nous vos témoignages sur francetelevisions.fr."},
        {session: "Janvier 2024", question: "Vous avez mis en ligne une annonce pour la location de votre appartement. Écrivez un courriel à une personne intéressée pour lui donner les informations sur l'appartement et le quartier."},
        {session: "Janvier 2024", question: "Écrivez un message à votre ami pour lui décrire le programme de vos prochaines vacances."},
        {session: "Janvier 2024", question: "Écrivez un message à votre ami pour lui raconter votre entretien d'embauche."},
        {session: "Janvier 2024", question: "Parc de loisirs : 'J'ai hâte de passer la journée avec toi demain. S'il te plaît, dis-moi, quelle activité nous pourrons faire ?'. Répondez à votre ami pour lui décrire la sortie (horaires, transport, billet, activités)."},
        {session: "Janvier 2024", question: "La bibliothèque de votre ville organise une rencontre avec un écrivain. Écrivez un message à votre ami(e) pour l'inviter à cet événement."},
        {session: "Janvier 2024", question: "Vous allez déménager. Des amis ont accepté de vous aider. Vous leur écrivez un message collectif pour leur expliquer comment le déménagement va se passer (lieux, horaires, durée, trajet, tâches à faire, etc.)"},
        {session: "Janvier 2024", question: "Vous êtes locataire d'un appartement trop grand pour vous. Écrivez une annonce dans un journal pour chercher un colocataire. Il faut mentionner : la superficie, le caractère du colocataire, le prix, etc."},
        {session: "Janvier 2024", question: "Votre ami Cédric a accepté de garder votre maison et jardin pendant vos vacances. Écrivez un message pour lui dire ce qu'il doit faire."},
        
        // Février 2024
        {session: "Février 2024", question: "Écrivez un message dans le journal de votre université pour rechercher un partenaire avec qui fait du sport."},
        {session: "Février 2024", question: "Salut ! Je cherche un endroit pour déjeuner en plein air ce week-end. Qu'est-ce que tu me propose ? A bientôt. Barbara. Vous répondez à votre amie Barbara. Vous décrivez le lieu (parc, jardin, terrasse, etc.)"},
        {session: "Février 2024", question: "Bonjour, Je viens bientôt en vacances dans ta région. Est-ce que tu peux me conseiller une visite à faire pendant mon voyage? Merci beaucoup. Mathieu. Vous répondez à votre ami Mathieu. Vous décrivez un lieu à visiter dans votre région."},
        {session: "Février 2024", question: "Je vais bientôt vivre dans ton quartier. Je cherche un endroit sympathique pour faire mes courses. Est-ce que tu connais un marché intéressant ? Merci d'avance et à bientôt ! Bernard, Vous répondez à votre ami Bernard. Dans votre message, vous décrivez un marché de votre quartier que vous aimez bien (lieu, horaires, produits, etc.)"},
        
        // Mars 2024
        {session: "Mars 2024", question: "Vous avez trouvé un nouveau travail. Vous écrivez à votre amie Francophone pour lui annoncer la bonne nouvelle. Vous décrivez votre poste, vos collègues et votre lieu de travail."},
        {session: "Mars 2024", question: "Votre ami Mehdi vient de d'emménager dans votre ville et cherche des renseignements sur les moyens de transports. Écrivez un message en lui donnant les informations nécessaires (types de transport, abonnement, tarif, etc.)"},
        {session: "Mars 2024", question: "Vous avez invité votre ami Cédric à votre mariage au Château de Chombony et il vous a répondu qu'il ne connait pas ce château. Décrivez à votre ami (lieu, localisation, transports, etc.)."},
        {session: "Mars 2024", question: "Je suis votre amie Anna et je compte passer un weekend dans ta ville. Donnez-moi des informations sur les moyens de transport pour explorer la ville. Répondez à Anna dans un message."},
        {session: "Mars 2024", question: "Vous allez bientôt déménager. Écrivez un message à votre ami(e) pour demander son aide en fournissant les informations (date, lieu, transports, etc.)."},
        
        // Avril 2024
        {session: "Avril 2024", question: "Vous avez trouvé un nouveau travail. Vous écrivez à votre amie Francophone pour lui annoncer la bonne nouvelle. Vous décrivez votre poste, vos collègues et votre lieu de travail."},
        {session: "Avril 2024", question: "Votre ami Mehdi vient de d'emménager dans votre ville et cherche des renseignements sur les moyens de transports. Écrivez un message en lui donnant les informations nécessaires (types de transport, abonnement, tarif, etc.)"},
        {session: "Avril 2024", question: "Vous avez invité votre ami Cédric à votre mariage au Château de Chombony et il vous a répondu qu'il ne connait pas ce château. Décrivez à votre ami (lieu, localisation, transports, etc.)."},
        {session: "Avril 2024", question: "Je suis votre amie Anna et je compte passer un weekend dans ta ville. Donnez-moi des informations sur les moyens de transport pour explorer la ville. Répondez à Anna dans un message."},
        {session: "Avril 2024", question: "Vous allez bientôt déménager. Écrivez un message à votre ami(e) pour demander son aide en fournissant les informations (date, lieu, transports, etc.)."},
        
        // Mai 2024
        {session: "Mai 2024", question: "Vous partez en vacances avec une amie, vous avez trouvé un hôtel. Vous écrivez un message à vos amis pour décrire cet hôtel (localisation, prix, équipements, etc.) et vous leur proposez de réserver cet hôtel."},
        {session: "Mai 2024", question: "Rédigez un message pour inviter votre ami à passer ses vacances dans votre ville."},
        {session: "Mai 2024", question: "Parc de loisirs : 'J'ai hâte de passer la journée avec toi demain. S'il te plaît, dis-moi, quelle activité nous pourrons faire ?' Répondez à votre ami pour lui décrire la sortie (horaires, transport, billet, activités)."},
        {session: "Mai 2024", question: "Vous souhaitez assister à un festival de cinéma dans votre ville. Vous écrivez un message à votre ami(e) pour lui proposer de venir avec vous. Vous lui donnez toutes les informations nécessaires sur févènement (films, dates et horaires, tarifs, etc.)."},
        {session: "Mai 2024", question: "Votre ami Mehdi vient de s'installer dans votre ville et il a besoin d'aide concernant les transports. Répondez-lui en lui donnant les informations (types de transport, abonnement, prix...)"},
        
        // Septembre 2024
        {session: "Septembre 2024", question: "Vous partez en voyage et vous laissez votre appartement à un ami qui veut venir rester chez-vous pendant vos vacances. Vous lui envoyez un message pour décrire votre appartement (immeuble, logement, accès...)."},
        {session: "Septembre 2024", question: "Ecrivez un message à vos amis pour les inviter à votre anniversaire et leur raconter comment va se dérouler votre fête."},
        {session: "Septembre 2024", question: "Votre ami veut se mettre au sport. Vous lui envoyez un message pour lui conseiller une salle de sport situé dans votre quartier (localisation, prix, type d'activités, etc...)"},
        {session: "Septembre 2024", question: "Vous faites du sport dans un club. Vous venez de remporter une compétition. Vous écrivez un courriel à vos amis pour leur raconter cet évènement sportif et annoncer votre réussite sportive."},
        {session: "Septembre 2024", question: "Salut, Comment ça va ? Alors, comment est la nouvelle université ? Est-ce que les étudiants sont sympas ? Comment sont les profs ? À bientôt. Alex. Vous répondez à Alex dans un message où vous décrivez votre université (professeurs, étudiants, activités, etc.)."},
        
        // Octobre 2024
        {session: "Octobre 2024", question: "Vous avez déménagé dans une nouvelle ville depuis un mois. Vous écrivez un courriel à votre Leo pour lui donner de vos nouvelles ! Vous devez lui décrire à propos de : ( l'appartement, le quartier, la ville, les activités...)."},
        {session: "Octobre 2024", question: "Vous allez fêter votre anniversaire. Vos amis vous demandent ce que vous souhaitez comme cadeaux. Vous voulez des vêtements. Vous leur écrivez un message pour leur décrire les vêtements que vous aimeriez recevoir."},
        {session: "Octobre 2024", question: "Vous voulez partir en week-end avec vos amis le mois prochain. Vous leur écrivez un message pour décrire votre projet (lieu, transport, activités, etc.)."},
        {session: "Octobre 2024", question: "Inviter tes amis à un anniversaire surprise d'une autre personne."},
        {session: "Octobre 2024", question: "Vous organisez une fête, écrivez à vos amis pour vous aider à l'organiser."},
        
        // Novembre 2024
        {session: "Novembre 2024", question: "Vous organisez une fête d'anniversaire pour votre ami. Écrivez un message pour inviter ses amis. Précisez la date, le lieu et les activités prévues."},
        {session: "Novembre 2024", question: "C'est bientôt l'anniversaire de votre amie Flavie. Vous voulez lui offrir un voyage et écrivez à votre amie Flavie. Expliquez votre projet. Décrivez le programme du voyage (activités, destination, logement, etc.)."},
        {session: "Novembre 2024", question: "Vous avez invité votre ami Cédric à votre mariage au Château de Chambon et il vous a répondu qu'il ne connait pas ce château. Décrivez à votre ami (lieu, localisation, transports, etc.)."},
        {session: "Novembre 2024", question: "Votre ami Mehdi vient de d'emménager dans votre ville et cherche des renseignements sur les moyens de transports. Écrivez un message en lui donnant les informations nécessaires (types de transport, abonnement, tarif, etc.)."},
        {session: "Novembre 2024", question: "Vous voulez partir en week-end avec vos amis le mois prochain. Vous leur écrivez un message pour décrire votre projet (lieu, transport, activités, etc.)."}
    ],
    
    // Tâche 2 - Récit Personnel (120-150 mots)
    2: [
        // Janvier 2024
        {session: "Janvier 2024", question: "Vous avez passé des vacances formidables dans une belle région de votre pays. Vous écrivez un message à vos amis dans lequel vous racontez votre expérience. Vous expliquez pourquoi vous avez beaucoup aimé ce séjour."},
        {session: "Janvier 2024", question: "Vous venez de commencer les cours à l'université à Montréal, écrivez un message à votre ami pour lui raconter votre première semaine à l'université."},
        {session: "Janvier 2024", question: "Écrivez un article de blog sur un événement auquel vous avez assisté dernièrement (fête, festival, ...)"},
        {session: "Janvier 2024", question: "Gagnez deux billets pour la destination de votre choix avec la compagnie Air Tropiques. Racontez votre plus beau voyage sur notre forum. Écrivez un message sur le forum de la compagnie Air Tropiques. Vous racontez votre plus beau voyage (destination, activités, ...) et vous dites pourquoi..."},
        {session: "Janvier 2024", question: "Écrivez un message à vos amis pour leur raconter votre expérience lors d'un salon du livre (conférence, expositions et rencontre avec les auteurs...)"},
        {session: "Janvier 2024", question: "Vous avez participé à un événement nommé 'La semaine du goût'. Écrivez un article de blog pour raconter cette expérience."},
        {session: "Janvier 2024", question: "Participez à notre concours pour gagner un séjour pour deux personnes dans la ville de votre choix. Rédigez un article sur le thème : « La vie de mon artiste préféré(e) ». Vous participez à ce concours. Vous expliquez pourquoi vous avez choisi cet(te) artiste et vous racontez sa vie."},
        {session: "Janvier 2024", question: "Vous faites une réclamation par rapport aux mauvaises prestations d'une agence de voyages suite à un voyage mal organisé. Exprimez votre mécontentement."},
        {session: "Janvier 2024", question: "Vous venez de commencer une nouvelle activité de loisir (sport, danse, etc.). Écrivez un article sur votre blog pour parler de cette expérience."},
        
        // Février 2024
        {session: "Février 2024", question: "Écrivez dans un article un message pour raconter votre arrivée dans un pays étranger en donnant vos impressions."},
        {session: "Février 2024", question: "Vous avez visité un nouveau pays pendant vos vacances. Sur un site internes, vous racontez votre expérience et vous donnez votre opinion sur ce pays."},
        {session: "Février 2024", question: "Bonjour, Vous avez pris des cours dans notre salle de sport. Donnez-nous votre avis sur notre site Internet ! www.masalledesport.org. Sur le site Internet de la salle de sport, vous répondez à ce message. Vous racontez cette expérience et vous donnez votre avis."},
        {session: "Février 2024", question: "Vous faites partie d'une association de quartier qui propose des activités aux enfants (aide aux devoirs, sorties, jeux, etc.) Sur votre site internet, vous racontez votre expérience et vous expliquez pourquoi ce type d'association est utile."},
        
        // Mars 2024
        {session: "Mars 2024", question: "Une étudiante qui à 19 ans veut aller à l'étranger pour les études. Elle demande aux internautes du forum de partager leurs expériences et vous avez fait un an à l'étranger. Parlez- lui de votre expérience (décrire le séjour à l'étranger, les activités...)."},
        {session: "Mars 2024", question: "Exprimez votre admiration pour une personnalité, célèbre ou non, en vous appuyant sur ses actions spécifiques. Rédigez un article de blog en détaillant les actions remarquables de cette personne et expliquez pourquoi vous l'aimez."},
        {session: "Mars 2024", question: "Dans votre blog, Racontez votre expérience de l'apprentissage d'une langue étrangère (vous écrivez sur un forum internet en racontant votre expérience en apprenant une langue étrangère)."},
        {session: "Mars 2024", question: "Vous avez assisté à une fête de voisins du quartier, écrivez un blog pour montrer pourquoi vous avez aimé cette fête."},
        {session: "Mars 2024", question: "Vous faites une réclamation par rapport aux mauvaises prestations d'une agence de voyage suite à un voyage mal organisé. Exprimez votre mécontentement."},
        
        // Avril 2024 (identique à Mars 2024)
        {session: "Avril 2024", question: "Une étudiante qui à 19 ans veut aller à l'étranger pour les études. Elle demande aux internautes du forum de partager leurs expériences et vous avez fait un an à l'étranger. Parlez- lui de votre expérience (décrire le séjour à l'étranger, les activités...)."},
        {session: "Avril 2024", question: "Exprimez votre admiration pour une personnalité, célèbre ou non, en vous appuyant sur ses actions spécifiques. Rédigez un article de blog en détaillant les actions remarquables de cette personne et expliquez pourquoi vous l'aimez."},
        {session: "Avril 2024", question: "Dans votre blog, Racontez votre expérience de l'apprentissage d'une langue étrangère (vous écrivez sur un forum internet en racontant votre expérience en apprenant une langue étrangère)."},
        {session: "Avril 2024", question: "Vous avez assisté à une fête de voisins du quartier, écrivez un blog pour montrer pourquoi vous avez aimé cette fête."},
        {session: "Avril 2024", question: "Vous faites une réclamation par rapport aux mauvaises prestations d'une agence de voyage suite à un voyage mal organisé. Exprimez votre mécontentement."},
        
        // Mai 2024
        {session: "Mai 2024", question: "Vous êtes parti(e) travailler à l'étranger. Vous envoyez un message à vos amis pour raconter cette nouvelle expérience professionnelle. Vous expliquez ce que vous avez le plus aimé."},
        {session: "Mai 2024", question: "Vous avez participé à un concours pour gagner un séjour de deux semaines dans votre ville préféré. Le thème de ce concours est 'Mon artiste préféré'. Écrivez un article de blog pour parler de votre article préféré."},
        {session: "Mai 2024", question: "Écrivez un message à vos amis pour leur raconter votre expérience lors d'un salon du livre (conférence, expositions et rencontre avec les auteurs...)."},
        {session: "Mai 2024", question: "Vous avez accueilli un étudiant étranger pendant une semaine chez vous. Sur votre blog, vous écrivez un article pour raconter cette semaine. Vous expliquez pourquoi vous avez aimé cette expérience."},
        {session: "Mai 2024", question: "Vous aimez une personne célèbre ou non par ses actions. Écrivez dans votre blog personnel en précisant l'action que cette personne a faite et dites pourquoi vous l'adorez."},
        
        // Septembre 2024
        {session: "Septembre 2024", question: "Écrivez un article de blog sur votre souvenir de voyage que vous avez aimé le plus."},
        {session: "Septembre 2024", question: "Répondez en commentaire à une publication sur Facebook au sujet des études à l'étranger en citant les avantages et les inconvénients de cette expérience."},
        {session: "Septembre 2024", question: "Vous avez participé à un événement qui vous a marqué (anniversaire, mariage, etc...). Racontez votre souvenir."},
        {session: "Septembre 2024", question: "' Le site «colocation.com» recherche des témoignes sur vos expériences de colocation. Écrivez-nous ! ' Vous avez déjà habité en colocation avec des amis. Vous racontez votre expérience aux membres du site internet. Vous donnez votre opinion sur ce mode de logement."},
        {session: "Septembre 2024", question: "Vous avez décidé de ne plus utiliser votre réseau social préféré (Instagram, Facebook, etc.). Vous écrivez à vos amis pour leur raconter cette expérience et expliquer pourquoi vous avez pris cette décision."},
        
        // Octobre 2024
        {session: "Octobre 2024", question: "Vous avez assisté à une fête traditionnelle dans votre pays où à l'étranger. Racontez la dans votre blog et dites pourquoi vous l'avez aimée."},
        {session: "Octobre 2024", question: "www.manger-international.com Ce mois-ci, nous nous intéressons aux habitudes alimentaires dans le monde. Racontez-nous comment mangent les habitants de votre pays ! Les 10 premiers témoignages seront publiés sur notre site ! Vous avez lu cette annonce. Vous écrivez un article pour les lecteurs du site www.manger-international.com Vous expliquez comment mangent les habitants de votre pays et vous indiquez quelles habitudes vous plaisent ou vous déplaisent, et pourquoi."},
        {session: "Octobre 2024", question: "COURRIER DES LECTEURS. Tout quitter pour partir en voyage pendant un an: bonne ou mauvaise idée ? Répondez sur notre site Internet : 'voyage.internaute.fr'. Vous écrivez un message sur ce site internet, vous répondez à la question posée en prenant des exemples de votre vie personnelle."},
        {session: "Octobre 2024", question: "Blog : Journée dans une brocante/vide greniers."},
        {session: "Octobre 2024", question: "Vous avez participé à une compétition sportive, écrivez un article (blog, magazines, etc) (lieux, date, organisation)."},
        
        // Novembre 2024
        {session: "Novembre 2024", question: "Vous participez à un concours artistique (musique, dessin, etc.). Racontez les événements dans un blog. Décrivez ce que vous avez aimé."},
        {session: "Novembre 2024", question: "Je suis étudiante et je vais partir étudier un an à l'étranger. Mais, j'ai un peu peur. Qui a déjà fait cela ? Justine. Vous répondez à Justine : Racontez un séjour d'étude que vous avez fait dans un pays étranger. Expliquez pourquoi cette expérience a été positive ou négative pour vous."},
        {session: "Novembre 2024", question: "Dans votre blog, Racontez votre expérience de l'apprentissage d'une langue étrangère (vous écrivez sur un forum internet en racontant votre expérience en apprenant une langue étrangère)."},
        {session: "Novembre 2024", question: "Exprimez votre admiration pour une personnalité, célèbre ou non, en vous appuyant sur ses actions spécifiques. Rédigez un article de blog en détaillant les actions remarquables de cette personne et expliquez pourquoi vous l'aimez."},
        {session: "Novembre 2024", question: "COURRIER DES LECTEURS. Tout quitter pour partir en voyage pendant un an: bonne ou mauvaise idée ? Répondez sur notre site Internet : 'voyage.internaute.fr'. Vous écrivez un message sur ce site internet, vous répondez à la question posée en prenant des exemples de votre vie personnelle."}
    ],
    
    // Tâche 3 - Texte Argumentatif (120-150 mots)
    3: [
        {
            session: "Janvier 2024",
            question: "Les écoles privées ou publiques ?",
            document1: "À la rentrée, le nombre d'élèves inscrits dans des écoles privées a augmenté en France. Le succès des établissements privés n'est pas directement lié aux bons résultats scolaires de leurs élèves. C'est la réputation de ces lieux qui explique un tel enthousiasme. Aux yeux de nombreux parents, les élèves y sont mieux encadrés, mieux surveillés et les professeurs sont plus présents. Les parents sont aussi rassurés parce que les classes sont homogènes: elles accueillent généralement des élèves de milieux sociaux favorisés. En effet, les études dans ces établissements sont payantes, ce qui n'est pas le cas dans les écoles publiques.",
            document2: "Dans les collèges privés, il y a peu d'élèves de milieux sociaux défavorisés. Comme les études dans ces établissements sont payantes, certaines catégories de population en sont exclues. Ce système qui oppose écoles publiques et écoles privées ne facilite pas la mixité sociale. Ainsi, les élèves du privé ont rarement l'occasion de rencontrer d'autres jeunes issus de milieux sociaux moins favorisés qu'eux et inversement. Ce modèle scolaire reproduit les inégalités sociales et renforce le sentiment d'exclusion de certains jeunes."
        },
        {
            session: "Janvier 2024",
            question: "Les animaux de compagnie pour les enfants, pour ou contre ?",
            document1: "Offrir un animal de compagnie à un enfant présente de nombreux avantages, comme le soulignent beaucoup de psychologues. Pour des enfants qui n'ont pas des frères et/ou des sœurs, l'animal est un compagnon qui leur évitera la solitude. Grâce à lui, un enfant prendra confiance en lui et il apprendra vite qu'un animal est un être vivant qui a besoin d'attention et de respect. En sa présence, l'enfant se sentira en sécurité et pourra agir de manière autonome, sans l'aide de ses parents.",
            document2: "Beaucoup d'enfants demandent, un jour ou l'autre, un animal à leurs parents, le plus souvent un chien ou un chat. Mais même si vous avez envie de faire plaisir à votre enfant, il vaut mieux réfléchir sérieusement avant d'acheter un animal domestique. L'animal devient un nouveau membre de la famille et représente un engagement sur de nombreuses années. Or, avoir un animal coûte souvent très cher, et c'est une grande responsabilité. On ne peut pas le traiter comme un jouet que l'on met à la poubelle quand l'enfant s'en désintéresse."
        },
        {
            session: "Janvier 2024",
            question: "Le vélo en ville, pour ou contre?",
            document1: "Quand on parle de vélo, on pense systématiquement à deux choses: sport et loisir. On oublie souvent que c'est avant tout un mode de déplacement personnel et professionnel. En ville, c'est un moyen de transport rapide et déstressant puisqu'il permet d'éviter les interminables embouteillages aux heures de pointe. Se rendre au travail tout en faisant du sport, histoire de joindre l'utile à l'agréable.",
            document2: "Avec tous les accidents de la route observés annuellement, sortir son vélo pour se déplacer avec en ville peut être très dangereux. En effet, avec la densité importante de véhicules, le non-respect du Code de la route et le manque de pistes cyclables, pratiquer du vélo en zone urbaine présente de vrais risques d'accident. De plus, faire du vélo de nos jours, c'est s'exposer à des gaz d'échappement toxiques et nocifs pour la santé humaine (notamment le monoxyde de carbone...)."
        },
        {
            session: "Janvier 2024",
            question: "L'école à domicile, pour ou contre?",
            document1: "Les raisons qui poussent les parents à opter pour la scolarisation à domicile sont nombreuses. Elle donne la possibilité d'adopter une pédagogie plus individualisée. On peut passer plus de temps sur les points sur lesquels l'enfant bute ou lui proposer, à l'occasion, des jeux éducatifs. L'enfant gère son apprentissage à son rythme, il creuse les sujets qui le passionnent et ne subit pas la pression des autres élèves qui peuvent avancer plus au moins vite que lui. Autre avantage de l'instruction en famille, une évolution différente. Avec l'école à la maison, pas de notes qui peuvent parfois être décourageantes, mais un contrôle continu des connaissances, pas de stress dû aux évaluations et aux devoirs.",
            document2: "Le choix de la scolarisation à domicile représente un véritable défi et donc, quelques inconvénients à prendre en compte avant de se lancer. La scolarisation à domicile nécessite beaucoup de temps, une bonne organisation et elle a aussi un coût. Tout le matériel, les livres, les manuels, et les sorties sont à la charge des familles, et l'un des deux parents est souvent amené à mettre entre parenthèses son emploi. Au total, l'école à domicile coûte généralement plus cher qu'une scolarisation dans le public. De plus, l'enfant ne côtoie pas de camarades au quotidien, car l'école à domicile ne permet pas à l'enfant d'entrer en interaction avec d'autres enfants comme il le ferait dans un cadre scolaire classique."
        },
        {
            session: "Février 2024",
            question: "Rôle De La Télévision Dans L'éducation Des Enfants.",
            document1: "La télévision est un outil de communication et de divertissement largement répandu dans notre société moderne. Son influence est incontestable, tant sur les individus que sur la culture en général. Elle permet de diffuser des informations, d'offrir des divertissements variés et de favoriser la diffusion de la culture. La télévision est présente dans de nombreux foyers et constitue une source d'information et de divertissement accessibles à tous. Grâce à sa portée et à sa capacité à toucher un large public, la télévision joue un rôle important dans la transmission des connaissances et la sensibilisation aux enjeux sociaux.",
            document2: "La télévision peut également présenter certains inconvénients. Les émissions télévisées peuvent parfois véhiculer des stéréotypes, des préjugés et des valeurs discutables. De plus, le temps passé devant la télévision peut réduire le temps consacré à d'autres activités plus enrichissantes, telles que la lecture, les interactions sociales ou la pratique d'un sport. Il est important de faire preuve de discernement et de réguler l'exposition à la télévision, en particulier pour les enfants, afin de préserver un équilibre sain entre les différentes formes d'apprentissage et de divertissement."
        },
        {
            session: "Février 2024",
            question: "L'utilisation du plastique, pour ou contre",
            document1: "À mon avis, faire disparaître le plastique de notre quotidien est impossible. Il faudrait plutôt réduire sa consommation. Le plastique est pratique et je pense qu'il est difficile de s'en passer. Il est présent dans tous les emballages (alimentaires, cosmétiques, etc.) et également dans le matériel que nous utilisons pour nos loisirs : raquettes de tennis, de ping-pong, nos maillots de bain, etc. L'industrie du plastique crée énormément d'emplois et elle réalise beaucoup de bénéfices. On ne peut pas supprimer tout ce secteur d'activité ! Justine, 30 ans.",
            document2: "Le plastique est présent dans notre vie de tous les jours... mais pas seulement ! Il est aussi présent dans les mers et les océans et, à cause de lui, de nombreux poissons meurent car ils mangent du plastique. Il faut donc créer de nouveaux matériaux plus écologiques pour le remplacer, mais cela va prendre beaucoup de temps. Nous devons changer nos habitudes. De mon côté, je préfère ne pas acheter de produits emballés dans du plastique. J'utilise des boîtes en verre pour conserver mes aliments. Arthur, 35 ans."
        },
        {
            session: "Février 2024",
            question: "Livraison Des Repas Au Bureau : Pour Ou Contre ?",
            document1: "La livraison de repas permet de gagner du temps. Par exemple, quand on travaille, on peut se faire liver un repas au bureau sans se déplacer. On perd moins de temps pendant la pause déjeuner, on rentre donc plus tôt chez soi. Généralement, cela offre plus de choix : si un de nos collègues veut commander une pizza mais que nous souhaitons manger des sushis, plus de disputes, il suffit de commander des plats dans différents restaurants. L'autre avantage de ce nouveau mode de consommation est qu'il est disponible à toute heure. En effet, on trouve toujours des restaurants qui restent ouverts 24 heures sur 24. Céline, 25 ans.",
            document2: "La livraison de repas plait de plus en plus aux consommateurs qui n'ont pas le temps ou l'envie de cuisiner. Toutefois, ce service présente des inconvénients écologiques. Les repas sont souvent livrés en scooter ou en voiture, qui sont des modes de transports poluants ! Cette habitude a aussi des conséquences négatives sur la vie sociale. Quand on mange des repas livrés au bureau ou à domicile, on a tendance à rester enfermé et à voir les mêmes personnes. Pourtant, il est important de sortir prendre l'air et, pourquoi pas, de rencontrer d'autres personnes. Ahmed 40 ans."
        },
        {
            session: "Février 2024",
            question: "Le livre papier ou le livre numérique?",
            document1: "Depuis plusieurs années maintenant, de nombreux lecteurs ont décidé de remplacer la bibliothèque traditionnelle par des livres numériques. Selon eux, l'avantage est avant tout économique. D'une part, le livre numérique permet d'économiser du papier, d'autre part la version numérique d'un livre est généralement moins chère que la version papier. Les livres numériques ont un autre avantage : ils permettent une ouverture sur le monde pour les personnes en situation de handicap. Certaines options, comme la possibilité d'augmenter la taille des lettres, facilitent la lecture pour les personnes malvoyantes.",
            document2: "Le livre numérique remplacera-t-il le livre papier ? « Non », répondront la plupart des lecteurs. Le livre papier est un beau support. Quel plaisir de le prêter aux gens qu'on aime ou de l'offrir en glissant un petit mot dedans ! Le livre papier a une histoire, l'odeur du neuf ou de l'ancien... Il transmet beaucoup d'émotions alors que le livre numérique à un côté un peu impersonnel. De plus, les livres numériques demandent de posséder un minimum de connaissances en informatique, ce qui peut être une difficulté pour certaines personnes."
        },
        {
            session: "Mars 2024",
            question: "L'aide Aux Personnes Pauvres :",
            document1: "J'ai pris l'habitude, depuis des années maintenant, de donner un peu de mon temps et de mon argent afin d'aider les personnes vivant dans la précarité extrême, surtout ceux qui vivent sans abri en période hivernale. Pour our moi, c'est un devoir d'aider et de contribuer afin que ces personnes puissent vivre le ou des normalement possible. En assistant des pauvres ou des associations, on se sent utile au sein d'une société qui devient de plus en plus impitoyable. Marie, 58 ans.",
            document2: "Pour aider les personnes vivant dans la précarité, on doit s'investir davantage dans des associations caritatives. Personnellement, c'est ce que je fais, je suis bénévole dans une association située dans mon quartier. Elle a pour principal but, aider les sans-abris à trouver un logement et un travail afin qu'ils vivent le plus normalement possible. Cette action est plus bénéfique à long terme car elle permet de les rendre autonomes. Paul 63, ans."
        },
        {
            session: "Mars 2024",
            question: "Vivre En Colocation : Pour Ou Contre ?",
            document1: "La vie en colocation offre de nombreux avantages. Partager un logement avec d'autres personnes permet de réduire les dépenses, que ce soit le loyer, les factures ou les frais généraux. De plus, cela favorise les interactions sociales et les échanges culturels. Vivre avec des colocataires permet de rencontrer des individus de différents horizons, de nouer des amitiés et de share des expériences enrichissantes.",
            document2: "La colocation peut cependant présenter des défis. Les différences de personnalité et de mode de vie entre les colocataires peuvent entraîner des tensions. La gestion des responsabilités et des tâches ménagères peut également être source de conflits. De plus, la colocation peut limiter l'intimité et l'espace personnel. Il est important d'établir une communication ouverte et respectueuse, ainsi que des règles de vie commune, pour favoriser une cohabitation harmonieuse."
        }
    ]
};

// ============================================
// CRITÈRES D'ÉVALUATION DÉTAILLÉS PAR NIVEAU CECRL
// ============================================
const criteresParNiveau = {
    'A0': {
        description: 'Niveau Pré-débutant',
        tache1: {
            exigences: ['Peut écrire des mots isolés', 'Peut recopier des phrases simples'],
            criteres: ['Orthographe approximative', 'Vocabulaire limité aux mots courants']
        },
        tache2: {
            exigences: ['Peut écrire des phrases très simples avec aide', 'Utilisation de structures stéréotypées'],
            criteres: ['Phrases de 3-4 mots maximum', 'Erreurs systématiques de grammaire']
        },
        tache3: {
            exigences: ['Niveau insuffisant pour cette tâche'],
            criteres: ['Texte incohérent ou très court']
        }
    },
    'A1': {
        description: 'Niveau Introductif',
        tache1: {
            exigences: ['Peut écrire un message simple de 60-120 mots', 'Utilise des formules de politesse basiques'],
            criteres: ['Vocabulaire élémentaire', 'Structures simples (présent)', 'Phrases courtes']
        },
        tache2: {
            exigences: ['Peut décrire des événements simples', 'Utilise des connecteurs basiques (et, mais, ou)'],
            criteres: ['Récit chronologique simple', 'Peu de détails', 'Erreurs fréquentes']
        },
        tache3: {
            exigences: ['Peut exprimer une opinion simple'],
            criteres: ['Argumentation limitée', 'Structure basique']
        }
    },
    'A2': {
        description: 'Niveau Intermédiaire',
        tache1: {
            exigences: ['Message clair et adapté', 'Formules de politesse appropriées'],
            criteres: ['Vocabulaire quotidien', 'Phrases plus variées', 'Peu d\'erreurs gênantes']
        },
        tache2: {
            exigences: ['Récit cohérent avec quelques détails', 'Exprime des sentiments simples'],
            criteres: ['Utilisation du passé composé', 'Connecteurs variés', 'Descriptions basiques']
        },
        tache3: {
            exigences: ['Peut développer une opinion avec quelques arguments'],
            criteres: ['Structure perceptible', 'Arguments simples mais pertinents']
        }
    },
    'B1': {
        description: 'Niveau Seuil',
        tache1: {
            exigences: ['Message bien structuré', 'Ton adapté au destinataire'],
            criteres: ['Vocabulaire varié', 'Grammaire généralement correcte', 'Style fluide']
        },
        tache2: {
            exigences: ['Récit détaillé et personnel', 'Exprime clairement émotions et impressions'],
            criteres: ['Utilisation de plusieurs temps verbaux', 'Descriptions vivantes', 'Bon enchaînement']
        },
        tache3: {
            exigences: ['Argumentation structurée avec introduction et conclusion'],
            criteres: ['Arguments développés', 'Exemples pertinents', 'Prise en compte d\'autres points de vue']
        }
    },
    'B2': {
        description: 'Niveau Avancé',
        tache1: {
            exigences: ['Message précis et nuancé', 'Adaptation fine au contexte'],
            criteres: ['Vocabulaire riche et précis', 'Syntaxe complexe maîtrisée', 'Style élégant']
        },
        tache2: {
            exigences: ['Récit détaillé avec réflexion personnelle', 'Style vivant et imagé'],
            criteres: ['Maîtrise des temps verbaux', 'Figures de style', 'Rythme varié']
        },
        tache3: {
            exigences: ['Argumentation solide et nuancée', 'Analyse approfondie'],
            criteres: ['Argumentation convaincante', 'Réfutation des contre-arguments', 'Style persuasif']
        }
    },
    'C1': {
        description: 'Niveau Autonome',
        tache1: {
            exigences: ['Message parfaitement adapté au contexte', 'Nuances subtiles'],
            criteres: ['Langue fluide et naturelle', 'Humour ou ironie maîtrisés', 'Culture adaptée']
        },
        tache2: {
            exigences: ['Récit littéraire', 'Style personnel marqué'],
            criteres: ['Créativité linguistique', 'Jouissance de la langue', 'Originalité']
        },
        tache3: {
            exigences: ['Argumentation d\'expert', 'Vision critique approfondie'],
            criteres: ['Argumentation sophistiquée', 'Références culturelles', 'Style académique']
        }
    },
    'C2': {
        description: 'Niveau Maîtrise',
        tache1: {
            exigences: ['Message d\'excellence professionnelle ou littéraire'],
            criteres: ['Perfection linguistique', 'Créativité exceptionnelle', 'Style remarquable']
        },
        tache2: {
            exigences: ['Œuvre littéraire personnelle'],
            criteres: ['Virtuosité linguistique', 'Originalité totale', 'Profondeur réflexive']
        },
        tache3: {
            exigences: ['Texte de référence académique ou littéraire'],
            criteres: ['Maîtrise absolue', 'Contribution originale', 'Style unique']
        }
    }
};

// ============================================
// INDICATEURS LINGUISTIQUES POUR CHAQUE NIVEAU
// ============================================
const indicateursLinguistiques = {
    'A0-A1': {
        structures: ['Présent de l\'indicatif', 'Articles définis/indéfinis', 'Négation simple'],
        connecteurs: ['et', 'mais', 'ou', 'parce que'],
        vocabulaire: '500 mots maximum'
    },
    'A2': {
        structures: ['Passé composé', 'Futur proche', 'Pronoms compléments'],
        connecteurs: ['donc', 'alors', 'puis', 'ensuite'],
        vocabulaire: '1000 mots'
    },
    'B1': {
        structures: ['Imparfait', 'Conditionnel présent', 'Subjonctif présent (basique)'],
        connecteurs: ['cependant', 'toutefois', 'néanmoins', 'par conséquent'],
        vocabulaire: '2000 mots'
    },
    'B2': {
        structures: ['Plus-que-parfait', 'Subjonctif', 'Voix passive'],
        connecteurs: ['en revanche', 'd\'ailleurs', 'notamment', 'par ailleurs'],
        vocabulaire: '4000 mots'
    },
    'C1': {
        structures: ['Subjonctif passé', 'Conditionnel passé', 'Concordance des temps'],
        connecteurs: ['quoi qu\'il en soit', 'au demeurant', 'en l\'occurrence'],
        vocabulaire: '8000 mots'
    },
    'C2': {
        structures: ['Tous les temps et modes', 'Structures littéraires', 'Jeux de langage'],
        connecteurs: ['de surcroît', 'en définitive', 'à cet égard'],
        vocabulaire: '10000+ mots'
    }
};

// ============================================
// VARIABLES ET CONFIGURATION GÉNÉRALE
// ============================================
let etapeActuelle = 1;
const totalEtapes = 4;

let tempsRestant = 60 * 60;
let chronometreInterval;
let chronometreEnCours = true;

const taches = {
    '1': {
        nom: 'Tâche 1 : Message Simple',
        description: 'Rédiger un message simple (courriel, note, carte postale)',
        motsMin: 60,
        motsMax: 120,
        niveauMin: 'A1',
        niveauMax: 'C2',
        tempsRecommande: 15
    },
    '2': {
        nom: 'Tâche 2 : Récit Personnel',
        description: 'Raconter une expérience personnelle ou décrire un événement',
        motsMin: 120,
        motsMax: 150,
        niveauMin: 'A2',
        niveauMax: 'C2',
        tempsRecommande: 20
    },
    '3': {
        nom: 'Tâche 3 : Texte Argumentatif',
        description: 'Exprimer une opinion personnelle sur un sujet donné',
        motsMin: 120,
        motsMax: 150,
        niveauMin: 'B1',
        niveauMax: 'C2',
        tempsRecommande: 25
    }
};

// ============================================
// FONCTIONS D'INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    configurerCompteursMots();
    demarrerChronometre();
    configurerNavigationTaches();
    initialiserSelecteursSujets();
    initialiserSelecteurCombinaisons();
});

function initialiserSelecteurCombinaisons() {
    const selectCombinaison = document.getElementById('select-combinaison');
    
    combinaisonsTCF.forEach((combinaison, index) => {
        const option = document.createElement('option');
        option.value = combinaison.id;
        option.textContent = combinaison.nom;
        selectCombinaison.appendChild(option);
    });
}

function selectionnerCombinaison(combinaisonId) {
    if (!combinaisonId) return;
    
    const combinaison = combinaisonsTCF.find(c => c.id === combinaisonId);
    if (!combinaison) return;
    
    document.getElementById('sujet-tache1').value = combinaison.tache1;
    document.getElementById('sujet-tache2').value = combinaison.tache2;
    document.getElementById('sujet-tache3').value = combinaison.tache3.question;
    
    const questionElement = document.getElementById('question-tache3');
    if (questionElement) {
        questionElement.textContent = combinaison.tache3.question;
        questionElement.style.display = 'block';
    }
    
    if (combinaison.tache3.document1 && combinaison.tache3.document2) {
        const doc1Element = document.getElementById('texte-document1');
        const doc2Element = document.getElementById('texte-document2');
        const doc1Container = document.getElementById('document1');
        const doc2Container = document.getElementById('document2');
        const docsContainer = document.getElementById('documents-tache3');
        
        if (doc1Element) doc1Element.textContent = combinaison.tache3.document1;
        if (doc2Element) doc2Element.textContent = combinaison.tache3.document2;
        if (doc1Container) doc1Container.style.display = 'block';
        if (doc2Container) doc2Container.style.display = 'block';
        if (docsContainer) docsContainer.classList.add('active');
    }
    
    for (let i = 1; i <= 3; i++) {
        const selectSujet = document.getElementById(`select-sujet-tache${i}`);
        if (selectSujet) {
            selectSujet.selectedIndex = 0;
        }
    }
}

function initialiserSelecteursSujets() {
    for (let tacheNum = 1; tacheNum <= 3; tacheNum++) {
        const selectElement = document.getElementById(`select-sujet-tache${tacheNum}`);
        const sujetsPourTache = sujetsTCF[tacheNum];
        
        if (!sujetsPourTache || !selectElement) continue;
        
        const sujetsParSession = {};
        sujetsPourTache.forEach((sujet, index) => {
            if (!sujetsParSession[sujet.session]) {
                sujetsParSession[sujet.session] = [];
            }
            sujetsParSession[sujet.session].push({
                sujet: sujet,
                indexInOriginalArray: index
            });
        });
        
        for (const session in sujetsParSession) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = session;
            
            sujetsParSession[session].forEach((item, indexInGroup) => {
                const sujet = item.sujet;
                const option = document.createElement('option');
                option.value = JSON.stringify({
                    session: sujet.session,
                    index: item.indexInOriginalArray,
                    tache: tacheNum
                });
                
                let texteAffiche = sujet.question;
                texteAffiche = texteAffiche.length > 100 ? 
                    texteAffiche.substring(0, 100) + "..." : texteAffiche;
                
                option.textContent = texteAffiche;
                optgroup.appendChild(option);
            });
            
            selectElement.appendChild(optgroup);
        }
    }
}

function selectionnerSujet(tacheNum, valeur) {
    if (!valeur) return;
    
    try {
        const sujetData = JSON.parse(valeur);
        const sujetsPourTache = sujetsTCF[sujetData.tache];
        const sujet = sujetsPourTache[sujetData.index];
        
        if (sujet) {
            const sujetInput = document.getElementById(`sujet-tache${tacheNum}`);
            if (sujetInput) {
                sujetInput.value = sujet.question;
            }
            
            if (tacheNum === 3) {
                const questionElement = document.getElementById('question-tache3');
                if (questionElement) {
                    questionElement.textContent = sujet.question;
                    questionElement.style.display = 'block';
                }
                
                if (sujet.document1 && sujet.document2) {
                    const doc1Element = document.getElementById('texte-document1');
                    const doc2Element = document.getElementById('texte-document2');
                    const doc1Container = document.getElementById('document1');
                    const doc2Container = document.getElementById('document2');
                    const docsContainer = document.getElementById('documents-tache3');
                    
                    if (doc1Element) doc1Element.textContent = sujet.document1;
                    if (doc2Element) doc2Element.textContent = sujet.document2;
                    if (doc1Container) doc1Container.style.display = 'block';
                    if (doc2Container) doc2Container.style.display = 'block';
                    if (docsContainer) docsContainer.classList.add('active');
                }
            } else {
                const questionElement = document.getElementById('question-tache3');
                const docsContainer = document.getElementById('documents-tache3');
                const doc1Container = document.getElementById('document1');
                const doc2Container = document.getElementById('document2');
                
                if (questionElement) questionElement.style.display = 'none';
                if (docsContainer) docsContainer.classList.remove('active');
                if (doc1Container) doc1Container.style.display = 'none';
                if (doc2Container) doc2Container.style.display = 'none';
            }
            
            document.getElementById('select-combinaison').selectedIndex = 0;
        }
    } catch (error) {
        console.error('Error parsing sujet data:', error);
    }
}

// ============================================
// FONCTIONS DE GESTION DU TEMPS
// ============================================
function demarrerChronometre() {
    if (chronometreInterval) clearInterval(chronometreInterval);
    
    chronometreInterval = setInterval(function() {
        if (chronometreEnCours) {
            tempsRestant--;
            
            const minutes = Math.floor(tempsRestant / 60);
            const secondes = tempsRestant % 60;
            document.getElementById('chronometre').textContent = 
                `${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
            
            const chronometreElement = document.getElementById('chronometre');
            chronometreElement.className = 'chronometre-temps';
            
            if (tempsRestant <= 10 * 60) {
                chronometreElement.classList.add('chronometre-alerte');
            }
            
            if (tempsRestant <= 5 * 60) {
                chronometreElement.classList.remove('chronometre-alerte');
                chronometreElement.classList.add('chronometre-urgence');
            }
            
            if (tempsRestant <= 0) {
                clearInterval(chronometreInterval);
                chronometreElement.textContent = '00:00';
                alert('Le temps est écoulé ! Votre évaluation sera automatiquement soumise.');
                soumettreEvaluations();
            }
        }
    }, 1000);
}

function suspendreChronometre() {
    chronometreEnCours = !chronometreEnCours;
    
    const suspendreBtn = document.querySelector('.btn-suspendre');
    if (chronometreEnCours) {
        demarrerChronometre();
        suspendreBtn.textContent = 'Suspendre le temps';
        suspendreBtn.classList.remove('btn-soumettre');
        suspendreBtn.classList.add('btn-suspendre');
    } else {
        clearInterval(chronometreInterval);
        suspendreBtn.textContent = 'Reprendre le temps';
        suspendreBtn.classList.remove('btn-suspendre');
        suspendreBtn.classList.add('btn-soumettre');
    }
}

// ============================================
// FONCTIONS DE NAVIGATION
// ============================================
function configurerNavigationTaches() {
    const boutonsTaches = document.querySelectorAll('.btn-tache');
    boutonsTaches.forEach(bouton => {
        bouton.addEventListener('click', function() {
            boutonsTaches.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function allerA(etapeId) {
    const nouvelleEtape = parseInt(etapeId.replace('etape', ''));
    
    if (nouvelleEtape > etapeActuelle) {
        for (let i = 1; i < nouvelleEtape; i++) {
            if (i <= 3) {
                const sujet = document.getElementById(`sujet-tache${i}`).value.trim();
                const reponse = document.getElementById(`reponse-tache${i}`).value.trim();
                if (!sujet || !reponse) {
                    alert(`Veuillez remplir le sujet et la réponse pour la Tâche ${i} avant de passer à l'étape suivante.`);
                    allerA(`etape${i}`);
                    return;
                }
            }
        }
    }
    
    etapeActuelle = nouvelleEtape;
    
    const pourcentage = ((etapeActuelle - 1) / (totalEtapes - 1)) * 100;
    document.getElementById('progression').style.width = `${pourcentage}%`;
    
    document.querySelectorAll('.etape').forEach(etape => {
        etape.classList.remove('active');
    });
    document.getElementById(etapeId).classList.add('active');
    
    if (etapeId === 'etape4') {
        evaluerToutesTaches();
    }
}

// ============================================
// FONCTIONS DE COMPTAGE DE MOTS
// ============================================
function configurerCompteursMots() {
    for (let i = 1; i <= 3; i++) {
        const textarea = document.getElementById(`reponse-tache${i}`);
        const compteur = document.getElementById(`compteur-mots-tache${i}`);
        
        if (textarea && compteur) {
            textarea.addEventListener('input', function() {
                const texte = this.value.trim();
                const mots = texte === '' ? 0 : texte.split(/\s+/).length;
                compteur.textContent = mots;
                
                const infoTache = taches[i];
                if (mots < infoTache.motsMin) {
                    compteur.style.color = '#ff6b6b';
                } else if (mots > infoTache.motsMax) {
                    compteur.style.color = '#ffa726';
                } else {
                    compteur.style.color = '#66bb6a';
                }
            });
            
            const texteInitial = textarea.value.trim();
            const motsInitiaux = texteInitial === '' ? 0 : texteInitial.split(/\s+/).length;
            compteur.textContent = motsInitiaux;
        }
    }
}

// ============================================
// FONCTIONS D'ANALYSE LINGUISTIQUE AVANCÉE
// ============================================
function analyserTexte(texte, numeroTache) {
    const mots = texte.trim().split(/\s+/).filter(mot => mot.length > 0);
    const nombreMots = mots.length;
    
    // Analyse des phrases
    const phrases = texte.split(/[.!?]+/).filter(p => p.trim().length > 0);
    const nombrePhrases = phrases.length;
    const motsParPhrase = nombrePhrases > 0 ? (nombreMots / nombrePhrases).toFixed(1) : 0;
    
    // Analyse des connecteurs
    const connecteursListe = [
        'et', 'mais', 'ou', 'donc', 'or', 'ni', 'car',
        'cependant', 'toutefois', 'néanmoins', 'pourtant',
        'ainsi', 'alors', 'puis', 'ensuite', 'finalement',
        'parce que', 'à cause de', 'grâce à', 'afin de',
        'bien que', 'quoique', 'si', 'quand', 'lorsque',
        'd\'abord', 'ensuite', 'enfin', 'premièrement',
        'de plus', 'en outre', 'par ailleurs', 'd\'ailleurs',
        'en revanche', 'au contraire', 'par contre',
        'c\'est-à-dire', 'autrement dit', 'par exemple',
        'notamment', 'en particulier', 'surtout',
        'en conclusion', 'pour conclure', 'finalement',
        'en résumé', 'en somme', 'en bref'
    ];
    
    let connecteursTrouves = [];
    let compteConnecteurs = 0;
    connecteursListe.forEach(connecteur => {
        const regex = new RegExp(`\\b${connecteur}\\b`, 'gi');
        const matches = texte.match(regex);
        if (matches) {
            compteConnecteurs += matches.length;
            connecteursTrouves.push(connecteur);
        }
    });
    
    // Analyse de la variété lexicale
    const motsUniques = new Set(mots.map(mot => mot.toLowerCase().replace(/[^a-zàâäéèêëîïôöùûüÿç]/g, '')));
    const tauxVariete = motsUniques.size / nombreMots * 100;
    
    // Analyse grammaticale (simplifiée)
    const verbes = texte.match(/\b(je|tu|il|elle|on|nous|vous|ils|elles)\s+\w+(er|ir|re|oir)\b/gi) || [];
    const subjonctifs = texte.match(/\b(il\s+faut\s+que|il\s+est\s+important\s+que|bien\s+que|quoique)\s+\w+/gi) || [];
    const conditionnels = texte.match(/\b\w+(ais|ait|ions|iez|aient)\b/gi) || [];
    
    // Analyse de la complexité syntaxique
    const propositions = texte.split(/[,;:]/).length;
    const complexiteSyntaxique = propositions / nombrePhrases;
    
    // Cohésion textuelle
    const pronoms = texte.match(/\b(le|la|les|lui|leur|y|en|ceci|cela|celui)\b/gi) || [];
    
    return {
        nombreMots,
        nombrePhrases,
        motsParPhrase: parseFloat(motsParPhrase),
        connecteurs: {
            total: compteConnecteurs,
            liste: [...new Set(connecteursTrouves)],
            par100Mots: (compteConnecteurs / nombreMots * 100).toFixed(2)
        },
        vocabulaire: {
            motsUniques: motsUniques.size,
            tauxVariete: tauxVariete.toFixed(1),
            niveauEstime: estimerNiveauVocabulaire(tauxVariete, motsUniques.size)
        },
        grammaire: {
            verbes: verbes.length,
            subjonctifs: subjonctifs.length,
            conditionnels: conditionnels.length,
            niveauEstime: estimerNiveauGrammaire(verbes.length, subjonctifs.length, conditionnels.length, nombreMots)
        },
        syntaxe: {
            complexite: complexiteSyntaxique.toFixed(2),
            propositions: propositions,
            pronoms: pronoms.length
        },
        coherences: analyserCoherence(texte, numeroTache)
    };
}

function estimerNiveauVocabulaire(tauxVariete, motsUniques) {
    if (tauxVariete < 15 || motsUniques < 50) return 'A0-A1';
    if (tauxVariete < 25) return 'A2';
    if (tauxVariete < 35) return 'B1';
    if (tauxVariete < 45) return 'B2';
    if (tauxVariete < 55) return 'C1';
    return 'C2';
}

function estimerNiveauGrammaire(verbes, subjonctifs, conditionnels, totalMots) {
    const densiteVerbes = (verbes / totalMots) * 100;
    const densiteSubjonctifs = (subjonctifs / totalMots) * 100;
    const densiteConditionnels = (conditionnels / totalMots) * 100;
    
    if (densiteVerbes < 5) return 'A0-A1';
    if (densiteSubjonctifs < 0.5 && densiteConditionnels < 0.5) return 'A2';
    if (densiteSubjonctifs < 1 && densiteConditionnels < 1) return 'B1';
    if (densiteSubjonctifs < 2 && densiteConditionnels < 2) return 'B2';
    if (densiteSubjonctifs < 3 && densiteConditionnels < 3) return 'C1';
    return 'C2';
}

function analyserCoherence(texte, numeroTache) {
    const analyses = {
        structure: false,
        progression: false,
        cohesion: false,
        adequation: false
    };
    
    // Vérification basée sur la tâche
    switch(numeroTache) {
        case 1: // Message simple
            analyses.structure = texte.includes('Cher') || texte.includes('Bonjour') || texte.includes('Madame') || texte.includes('Monsieur');
            analyses.adequation = texte.includes('Cordialement') || texte.includes('Amicalement') || texte.includes('Sincèrement');
            break;
        case 2: // Récit personnel
            const marqueursTemporels = ['d\'abord', 'ensuite', 'puis', 'finalement', 'enfin', 'un jour', 'le lendemain'];
            analyses.progression = marqueursTemporels.some(marqueur => texte.includes(marqueur));
            analyses.cohesion = (texte.match(/je\s+\w+/gi) || []).length > 3;
            break;
        case 3: // Texte argumentatif
            analyses.structure = texte.includes('premièrement') || texte.includes('d\'une part') || texte.includes('en conclusion');
            analyses.cohesion = (texte.match(/cependant|toutefois|néanmoins|par conséquent|donc/gi) || []).length > 2;
            break;
    }
    
    return analyses;
}

function determinerNiveauTachePrecis(numeroTache, analyse) {
    const infoTache = taches[numeroTache];
    let score = 0;
    let niveau = 'A0';
    
    // Critères pondérés
    const criteres = {
        longueur: 0.20,
        vocabulaire: 0.25,
        grammaire: 0.25,
        coherence: 0.20,
        connecteurs: 0.10
    };
    
    // Évaluation de la longueur
    if (analyse.nombreMots >= infoTache.motsMin) score += criteres.longueur;
    if (analyse.nombreMots >= infoTache.motsMax * 0.8) score += criteres.longueur * 0.5;
    
    // Évaluation du vocabulaire
    if (analyse.vocabulaire.tauxVariete >= 20) score += criteres.vocabulaire;
    if (analyse.vocabulaire.tauxVariete >= 35) score += criteres.vocabulaire * 0.5;
    
    // Évaluation grammaticale
    if (analyse.grammaire.niveauEstime.includes('B1') || analyse.grammaire.niveauEstime.includes('B2')) {
        score += criteres.grammaire;
    } else if (analyse.grammaire.niveauEstime.includes('C')) {
        score += criteres.grammaire * 1.5;
    }
    
    // Évaluation de la cohérence
    const coherencesVrai = Object.values(analyse.coherences).filter(v => v).length;
    score += (coherencesVrai / 4) * criteres.coherence;
    
    // Évaluation des connecteurs
    if (analyse.connecteurs.total >= 2) score += criteres.connecteurs;
    if (analyse.connecteurs.total >= 5) score += criteres.connecteurs * 0.5;
    
    // Détermination du niveau basé sur le score
    const niveauScores = {
        'A0': 0.2, 'A1': 0.4, 'A2': 0.55, 'B1': 0.7, 'B2': 0.85, 'C1': 0.95, 'C2': 1.0
    };
    
    for (const [niv, seuil] of Object.entries(niveauScores)) {
        if (score >= seuil) niveau = niv;
    }
    
    return {
        niveau,
        score: (score * 100).toFixed(1),
        details: {
            longueurAtteinte: analyse.nombreMots >= infoTache.motsMin,
            varieteVocabulaire: analyse.vocabulaire.tauxVariete,
            complexiteGrammaticale: analyse.grammaire.niveauEstime,
            connecteursUtilises: analyse.connecteurs.total,
            coherenceTextuelle: Object.values(analyse.coherences).filter(v => v).length
        }
    };
}

// ============================================
// FONCTIONS D'ÉVALUATION
// ============================================
function soumettreEvaluations() {
    clearInterval(chronometreInterval);
    chronometreEnCours = false;
    allerA('etape4');
}

function evaluerToutesTaches() {
    const resultats = [];
    let totalMots = 0;
    let totalPhrases = 0;
    let totalConnecteurs = 0;
    let totalMotsUniques = 0;
    
    for (let i = 1; i <= 3; i++) {
        const sujet = document.getElementById(`sujet-tache${i}`).value.trim();
        const texte = document.getElementById(`reponse-tache${i}`).value.trim();
        
        if (!sujet || !texte) continue;
        
        const analyse = analyserTexte(texte, i);
        const evaluation = determinerNiveauTachePrecis(i, analyse);
        
        totalMots += analyse.nombreMots;
        totalPhrases += analyse.nombrePhrases;
        totalConnecteurs += analyse.connecteurs.total;
        totalMotsUniques += analyse.vocabulaire.motsUniques;
        
        resultats.push({
            numero: i,
            sujet: sujet,
            texte: texte,
            analyse: analyse,
            evaluation: evaluation
        });
    }
    
    const niveauGlobal = determinerNiveauGlobalPrecis(resultats);
    afficherResultatsDetailles(niveauGlobal, resultats, totalMots, totalPhrases, totalConnecteurs, totalMotsUniques);
}

function determinerNiveauGlobalPrecis(resultats) {
    if (resultats.length === 0) return 'A0';
    
    const scoresNiveaux = {
        'A0': 0, 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6
    };
    
    let scoreTotal = 0;
    let poidsTotal = 0;
    const ponderations = [1, 1.5, 2];
    
    resultats.forEach((resultat, index) => {
        const scoreNiveau = scoresNiveaux[resultat.evaluation.niveau] || 0;
        const poids = ponderations[index] || 1;
        scoreTotal += scoreNiveau * poids;
        poidsTotal += poids;
    });
    
    const scoreMoyen = scoreTotal / poidsTotal;
    
    // Ajustement basé sur la performance globale
    const niveaux = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const indexNiveau = Math.min(Math.round(scoreMoyen), niveaux.length - 1);
    
    return niveaux[indexNiveau];
}

function afficherResultatsDetailles(niveauGlobal, resultats, totalMots, totalPhrases, totalConnecteurs, totalMotsUniques) {
    // Affichage du niveau global
    const divResultatNiveau = document.getElementById('resultat-niveau-global');
    const niveauClasse = niveauGlobal.replace('+', '');
    divResultatNiveau.innerHTML = `
        <div class="badge-niveau niveau-${niveauClasse}">
            Niveau ${niveauGlobal}<br>
            <small style="font-size: 1rem;">${criteresParNiveau[niveauGlobal]?.description || 'Expression Écrite'}</small>
        </div>
    `;
    
    // Feedback global
    const divTexteFeedback = document.getElementById('texte-feedback-global');
    const niveauInfo = criteresParNiveau[niveauGlobal] || criteresParNiveau['B1'];
    
    let feedback = `
        <p><strong>📊 Niveau CECRL :</strong> ${niveauGlobal} - ${niveauInfo.description}</p>
        <p><strong>🎯 Compétence générale :</strong> ${getDescriptionCompetence(niveauGlobal)}</p>
        <p><strong>📝 Production écrite :</strong> ${getDescriptionProduction(niveauGlobal)}</p>
        <hr style="margin: 15px 0;">
    `;
    
    divTexteFeedback.innerHTML = feedback;
    
    // Grille d'évaluation détaillée
    const divGrille = document.getElementById('grille-evaluation-detaille');
    let grilleHTML = '';
    
    resultats.forEach((resultat, index) => {
        const tacheInfo = taches[resultat.numero];
        const analyse = resultat.analyse;
        const evaluation = resultat.evaluation;
        
        grilleHTML += `
            <div class="grille-evaluation-item">
                <h5 style="color: #1e3c72; margin-bottom: 10px;">${tacheInfo.nom} - Niveau ${evaluation.niveau} (${evaluation.score}%)</h5>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 15px;">
                    <div style="background: #f5f5f5; padding: 8px; border-radius: 5px;">
                        <strong>Mots:</strong> ${analyse.nombreMots}/${tacheInfo.motsMax}<br>
                        ${analyse.nombreMots < tacheInfo.motsMin ? '⚠️ Trop court' : '✅ Longueur OK'}
                    </div>
                    <div style="background: #f5f5f5; padding: 8px; border-radius: 5px;">
                        <strong>Variété lexicale:</strong> ${analyse.vocabulaire.tauxVariete}%<br>
                        Niveau: ${analyse.vocabulaire.niveauEstime}
                    </div>
                    <div style="background: #f5f5f5; padding: 8px; border-radius: 5px;">
                        <strong>Connecteurs:</strong> ${analyse.connecteurs.total}<br>
                        ${analyse.connecteurs.par100Mots}/100 mots
                    </div>
                    <div style="background: #f5f5f5; padding: 8px; border-radius: 5px;">
                        <strong>Complexité syntaxique:</strong> ${analyse.syntaxe.complexite}<br>
                        ${analyse.syntaxe.complexite > 1.5 ? '✅ Bonne complexité' : '💡 À développer'}
                    </div>
                </div>
                
                <div class="points-forts-faibles">
                    <div class="points-forts"><strong>Points forts :</strong><br>
                    ${getPointsForts(resultat)}</div>
                    <div class="points-faibles"><strong>Points à améliorer :</strong><br>
                    ${getPointsFaibles(resultat)}</div>
                </div>
            </div>
        `;
    });
    
    divGrille.innerHTML = grilleHTML;
    
    // Statistiques globales
    const motsParPhrase = totalPhrases > 0 ? (totalMots / totalPhrases).toFixed(1) : 0;
    const tauxVarieteGlobal = totalMots > 0 ? (totalMotsUniques / totalMots * 100).toFixed(1) : 0;
    
    const divStatistiques = document.getElementById('statistiques-globales');
    divStatistiques.innerHTML = `
        <div class="stat-item">
            <div class="stat-valeur">${totalMots}</div>
            <div class="stat-label">Mots produits</div>
        </div>
        <div class="stat-item">
            <div class="stat-valeur">${totalPhrases}</div>
            <div class="stat-label">Phrases</div>
        </div>
        <div class="stat-item">
            <div class="stat-valeur">${motsParPhrase}</div>
            <div class="stat-label">Mots/phrase</div>
        </div>
        <div class="stat-item">
            <div class="stat-valeur">${totalConnecteurs}</div>
            <div class="stat-label">Connecteurs</div>
        </div>
        <div class="stat-item">
            <div class="stat-valeur">${tauxVarieteGlobal}%</div>
            <div class="stat-label">Variété lexicale</div>
        </div>
    `;
    
    // Résultats par tâche
    const divResultatsTaches = document.getElementById('resultats-taches');
    let htmlTaches = '';
    
    resultats.forEach(resultat => {
        const infoTache = taches[resultat.numero];
        const couleurNiveau = getCouleurNiveau(resultat.evaluation.niveau);
        
        htmlTaches += `
            <div class="resultat-tache">
                <h4>${infoTache.nom}</h4>
                <p><strong>Niveau atteint :</strong> <span style="color: ${couleurNiveau}; font-weight: bold;">${resultat.evaluation.niveau}</span></p>
                <p><strong>Score :</strong> ${resultat.evaluation.score}%</p>
                <p><strong>Mots :</strong> ${resultat.analyse.nombreMots} / Objectif: ${infoTache.motsMin}-${infoTache.motsMax}</p>
                <p><strong>Phrases :</strong> ${resultat.analyse.nombrePhrases}</p>
                <p><strong>Connecteurs :</strong> ${resultat.analyse.connecteurs.total} (${resultat.analyse.connecteurs.liste.slice(0, 3).join(', ')}...)</p>
                <div style="margin-top: 10px; font-size: 0.9em; color: #666;">
                    <em>${getCommentaireNiveauDetaille(resultat.evaluation.niveau, resultat.numero)}</em>
                </div>
            </div>
        `;
    });
    
    divResultatsTaches.innerHTML = htmlTaches;
    
    // Conseils d'amélioration
    const divConseilsAmelioration = document.getElementById('conseils-amelioration');
    divConseilsAmelioration.innerHTML = genererConseilsPersonnalises(niveauGlobal, resultats);
}

function getPointsForts(resultat) {
    const points = [];
    const analyse = resultat.analyse;
    
    if (analyse.nombreMots >= taches[resultat.numero].motsMin) {
        points.push('Longueur adéquate');
    }
    
    if (analyse.vocabulaire.tauxVariete > 25) {
        points.push('Vocabulaire varié');
    }
    
    if (analyse.connecteurs.total > 2) {
        points.push('Bon usage des connecteurs');
    }
    
    if (analyse.syntaxe.complexite > 1.2) {
        points.push('Syntaxe diversifiée');
    }
    
    return points.length > 0 ? points.join(', ') : 'À développer';
}

function getPointsFaibles(resultat) {
    const points = [];
    const analyse = resultat.analyse;
    
    if (analyse.nombreMots < taches[resultat.numero].motsMin) {
        points.push('Texte trop court');
    }
    
    if (analyse.vocabulaire.tauxVariete < 20) {
        points.push('Vocabulaire limité');
    }
    
    if (analyse.connecteurs.total < 2) {
        points.push('Peu de connecteurs');
    }
    
    if (analyse.syntaxe.complexite < 1) {
        points.push('Phrases trop simples');
    }
    
    return points.length > 0 ? points.join(', ') : 'Bon travail général';
}

function getDescriptionCompetence(niveau) {
    const descriptions = {
        'A0': 'Peut écrire des mots isolés et des phrases très courtes avec aide',
        'A1': 'Peut écrire des phrases simples isolées sur des sujets très familiers',
        'A2': 'Peut écrire une série d\'expressions et de phrases simples reliées par des connecteurs simples',
        'B1': 'Peut écrire des textes simples et cohérents sur des sujets familiers',
        'B2': 'Peut écrire des textes clairs et détaillés sur une gamme étendue de sujets',
        'C1': 'Peut s\'exprimer dans un texte clair et bien structuré et développer son point de vue',
        'C2': 'Peut écrire des textes clairs et fluides dans un style approprié et efficace'
    };
    return descriptions[niveau] || 'Compétence en développement';
}

function getDescriptionProduction(niveau) {
    const descriptions = {
        'A0': 'Production très limitée, centrée sur la survie',
        'A1': 'Production de messages simples et courts',
        'A2': 'Production de textes courts sur des sujets familiers',
        'B1': 'Production de textes simples mais complets',
        'B2': 'Production détaillée et argumentée',
        'C1': 'Production nuancée et bien structurée',
        'C2': 'Production sophistiquée et élégante'
    };
    return descriptions[niveau] || '';
}

function getCommentaireNiveauDetaille(niveau, numeroTache) {
    const commentaires = {
        'A0': ['Écrivez plus régulièrement, commencez par des phrases de base', 'Utilisez un dictionnaire visuel', 'Apprenez 5 nouveaux mots par jour'],
        'A1': ['Pratiquez les formules de politesse', 'Écrivez des cartes postales simples', 'Travaillez la construction sujet-verbe-complément'],
        'A2': ['Développez vos descriptions', 'Utilisez le passé composé', 'Ajoutez des détails à vos récits'],
        'B1': ['Structurez vos textes (introduction, développement, conclusion)', 'Argumentez avec des exemples', 'Variez les connecteurs'],
        'B2': ['Affinez vos arguments', 'Utilisez des nuances', 'Développez votre style personnel'],
        'C1': ['Perfectionnez votre style', 'Jouez avec la langue', 'Écrivez sur des sujets complexes'],
        'C2': ['Cherchez l\'excellence stylistique', 'Expérimentez différents registres', 'Contribuez à des publications en français']
    };
    
    const conseils = commentaires[niveau] || ['Continuez à pratiquer régulièrement'];
    return conseils[numeroTache - 1] || conseils[0];
}

function genererConseilsPersonnalises(niveauGlobal, resultats) {
    let html = '';
    const niveauIndicateurs = niveauGlobal === 'A0' ? 'A0-A1' : niveauGlobal;
    const indicateurs = indicateursLinguistiques[niveauIndicateurs] || indicateursLinguistiques['B1'];
    
    html += `
        <div class="amelioration-niveau">
            <h5>🎯 Pour atteindre le niveau suivant :</h5>
            <p><strong>Structures à maîtriser :</strong> ${indicateurs.structures.join(', ')}</p>
            <p><strong>Connecteurs à utiliser :</strong> ${indicateurs.connecteurs.slice(0, 5).join(', ')}</p>
            <p><strong>Objectif vocabulaire :</strong> ${indicateurs.vocabulaire}</p>
        </div>
        
        <div class="amelioration-niveau">
            <h5>📝 Exercices recommandés :</h5>
            <ul>
                ${getExercicesRecommandes(niveauGlobal).map(ex => `<li>${ex}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return html;
}

function getExercicesRecommandes(niveau) {
    const exercices = {
        'A0': [
            'Copier des textes courts',
            'Écrire des listes (courses, activités)',
            'Remplir des formulaires simples',
            'Écrire des cartes de vœux'
        ],
        'A1': [
            'Tenir un journal personnel simple',
            'Écrire des emails courts à des amis',
            'Décrire des photos',
            'Raconter sa journée en 5 phrases'
        ],
        'A2': [
            'Tenir un journal personnel détaillé',
            'Écrire des emails formels simples',
            'Raconter un voyage',
            'Décrire une personne'
        ],
        'B1': [
            'Écrire des lettres formelles',
            'Rédiger des comptes-rendus',
            'Argumenter sur des forums',
            'Résumer des articles'
        ],
        'B2': [
            'Écrire des articles de blog',
            'Rédiger des rapports',
            'Critiquer un film/livre',
            'Débattre par écrit sur des sujets complexes'
        ],
        'C1': [
            'Écrire des essais',
            'Rédiger des articles académiques',
            'Traduire des textes littéraires',
            'Analyser des œuvres culturelles'
        ],
        'C2': [
            'Écrire de la fiction',
            'Rédiger des articles scientifiques',
            'Traduire des textes techniques',
            'Créer du contenu professionnel'
        ]
    };
    
    return exercices[niveau] || exercices['B1'];
}

function getCouleurNiveau(niveau) {
    const couleurs = {
        'A0': '#ff4444', 'A1': '#ff6b6b', 'A2': '#ffa726', 'B1': '#42a5f5', 
        'B2': '#66bb6a', 'C1': '#ab47bc', 'C2': '#5c6bc0'
    };
    return couleurs[niveau.replace('+', '')] || '#78909c';
}

// ============================================
// FONCTION POUR EXPORTER LES RÉSULTATS
// ============================================
function exporterResultats() {
    const date = new Date().toLocaleString('fr-FR');
    const niveau = document.querySelector('.badge-niveau').textContent;
    let contenu = `RÉSULTATS D'ÉVALUATION TCF EXPRESSION ÉCRITE\n`;
    contenu += `Date: ${date}\n`;
    contenu += `Niveau: ${niveau}\n\n`;
    
    // Ajouter les statistiques
    const statsElements = document.querySelectorAll('.stat-item');
    contenu += `STATISTIQUES GLOBALES:\n`;
    statsElements.forEach(stat => {
        const valeur = stat.querySelector('.stat-valeur').textContent;
        const label = stat.querySelector('.stat-label').textContent;
        contenu += `- ${label}: ${valeur}\n`;
    });
    
    contenu += `\nDÉTAIL PAR TÂCHE:\n\n`;
    
    // Ajouter les détails par tâche
    const tacheElements = document.querySelectorAll('.resultat-tache');
    tacheElements.forEach((tache, index) => {
        const titre = tache.querySelector('h4').textContent;
        contenu += `TÂCHE ${index + 1}: ${titre}\n`;
        
        const paragraphes = tache.querySelectorAll('p');
        paragraphes.forEach(p => {
            contenu += `- ${p.textContent}\n`;
        });
        contenu += `\n`;
    });
    
    // Ajouter les conseils
    const conseilsElements = document.querySelectorAll('.amelioration-niveau');
    contenu += `CONSEILS POUR PROGRESSER:\n\n`;
    conseilsElements.forEach(conseil => {
        const titre = conseil.querySelector('h5').textContent;
        contenu += `${titre}:\n`;
        
        const paragraphes = conseil.querySelectorAll('p');
        paragraphes.forEach(p => {
            contenu += `- ${p.textContent}\n`;
        });
        
        const listes = conseil.querySelectorAll('li');
        listes.forEach(li => {
            contenu += `  • ${li.textContent}\n`;
        });
        contenu += `\n`;
    });
    
    contenu += `---\nÉvaluation générée par le simulateur TCF Expression Écrite`;
    
    // Créer et télécharger le fichier
    const blob = new Blob([contenu], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tcf-resultats-${date.replace(/[/:\\]/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================
// FONCTION POUR RECOMMENCER
// ============================================
function recommencerEvaluation() {
    etapeActuelle = 1;
    document.getElementById('progression').style.width = '0%';
    
    tempsRestant = 60 * 60;
    chronometreEnCours = true;
    document.getElementById('chronometre').textContent = '60:00';
    document.getElementById('chronometre').className = 'chronometre-temps';
    
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`sujet-tache${i}`).value = '';
        document.getElementById(`reponse-tache${i}`).value = '';
        document.getElementById(`compteur-mots-tache${i}`).textContent = '0';
        document.getElementById(`compteur-mots-tache${i}`).style.color = '#666';
        document.getElementById(`select-sujet-tache${i}`).selectedIndex = 0;
    }
    
    document.getElementById('select-combinaison').selectedIndex = 0;
    document.getElementById('question-tache3').style.display = 'none';
    document.getElementById('documents-tache3').classList.remove('active');
    document.getElementById('document1').style.display = 'none';
    document.getElementById('document2').style.display = 'none';
    
    document.querySelectorAll('.btn-tache').forEach((bouton, index) => {
        if (index === 0) {
            bouton.classList.add('active');
        } else {
            bouton.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.etape').forEach(etape => {
        etape.classList.remove('active');
    });
    
    document.getElementById('etape1').classList.add('active');
    
    const suspendreBtn = document.querySelector('.btn-suspendre');
    suspendreBtn.textContent = 'Suspendre le temps';
    suspendreBtn.classList.remove('btn-soumettre');
    suspendreBtn.classList.add('btn-suspendre');
    
    demarrerChronometre();
}