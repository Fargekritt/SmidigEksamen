
INSERT INTO artist (artist_ID, artist_name)
VALUES (1, 'Edvard Munch'),

       (2, 'Marianne Bratteli');


INSERT INTO exhibition (exhibition_ID, exhibition_name, floor)
VALUES (1, 'Alt er liv', 3),

       (2, 'Munchs Goya', 3),

       (3, 'Uendelig', 4),

       (4, 'Monumental', 6),

       (5, 'Skygger', 7),

       (6, 'Inntil', 7),

       (7, 'Hjertebank', 9),

       (8, 'Hver person er et nytt univers', 9),

       (9, 'Kaoskammeret', 10),

       (10, 'Admir Batlak', 10);



INSERT INTO theme (theme_ID, theme_name)
VALUES (1, 'Landskap'),

       (2, 'Interiør'),

       (3, 'Portrett'),

       (4, 'Sted'),

       (5, 'Natur'),

       (6, 'Kjærlighet'),

       (7, 'Tid'),

       (8, 'Familie'),

       (9, 'Angst'),

       (10, 'Sjalusi');



INSERT INTO painting (painting_ID, painting_name, date_created, description, image_path, artist_ID, exhibition_ID)
VALUES (1, 'Forskerne', '1911-1927',
        'Malt med olje på lerret. I 1916 fullførte Munch kunstverket “Alma Mater”, men var ikke fornøyd med maleriet. Han gjorde endringer på bildet, og lagde også flere alternative versjoner, deriblant “Forskerne”. Maleriet skal skildre “barn som i sin lek er unge forskere”.',
        'https://www.munchmuseet.no/globalassets/kunstverk/forskerne.jpg?w=1440&quality=75', 1, 4),

       (2, 'Menneskeberget', '1927-1929',
        'Malt med olje på ugrundert lerret. Munch begynte å skissere dette maleriet så tidlig som i 1890-årene men ikke før i 1929 var maleriet ferdig. I maleriet viser Munch mennesker som streber mot solen. Maleriet ble malt i forbindelse med at Munch deltok i en konkurranse om å lage et maleri som skulle heng i aulaen på Kongelige Frederiks Universitet.',
        'https://www.munchmuseet.no/globalassets/kunstverk/menneskeberget?w=1440&quality=75', 1, 4),

       (3, 'Solen', '1910-1911',
        'Malt med olje på lerret. Edvard Munchs maleri "Solen" er et av hans mest kjente verk, malt i 1910. "Solen" er et eksempel på Munchs ekspressive og symbolske stil. Den røde solen kan tolkes som et symbol på vitalitet, energi og livets kraft. Samtidig skaper den sterke kontrasten mellom den røde solen og den kalde, blågrønne fjorden en følelse av spenning og uro.',
        'https://www.munchmuseet.no/globalassets/kunstverk/solen.jpg?w=1440&quality=75', 1, 4),

       (4, 'Skrik', '1893',
        'Det originale “Skrik” ble laget med fargestift, flere ganger på papp. Edvard Munchs maleri "Skrik" er et av de mest kjente kunstverkene i verden, malt i 1893. Det er et ikonisk uttrykk for angst og fortvilelse, og har blitt et symbol på den menneskelige tilstand. "Skrik" viser en skikkelse som står på en bro, med et forvrengt ansikt og utstrakte hender. Bakgrunnen består av en bølgende og urovekkende landskap med blendende oransje og røde toner. Den intense følelsen av frykt og angst gjennomsyrer hele bildet.',
        'https://www.munchmuseet.no/globalassets/kunstverk/skrikpastell.jpg?mode=max&quality=95&w=1400', 1, 3),

       (5, 'Madonna', '1894',
        ' Laget med litografi, en grafisk trykketeknikk. Edvard Munchs maleri "Madonna" er et ikonisk verk som ble malt mellom 1894 og 1895. Det er en tolkning av det tradisjonelle kristne motivet, men Munch gir det en moderne og personlig vri. "Madonna" viser en kvinne med langt, lyst hår og et alvorlig ansiktsuttrykk. Hun er avbildet i enkle, nesten geometriske former, og det er en aura av mystikk og hellighet rundt henne. Hun holder et barn i armene sine, som symboliserer Jesusbarnet.',
        'https://www.munchmuseet.no/globalassets/kunstverk/madonna.jpg?w=1440&quality=75', 1, 3),

       (6, 'Det syke barn', '1927',
        'Malt på fabrikkgrundert, toskaftsvevd linlerret. Edvard Munchs maleri "Det syke barn" er et hjerteskjærende verk som ble malt i 1885. Det skildrer en scene der Munchs søster, Johanne Sophie, er sengeliggende som et sykt barn. Maleriet er et sterkt uttrykk for sorg og fortvilelse. "Det syke barn" viser den unge jenta i en seng med hvite laken, omgitt av mørke skygger og et mørkt rom. Ansiktet hennes bærer preg av smerte og utmattelse, og hun ser ut mot betrakteren med et uttrykk av stillhet og resignasjon.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/4439/full/max/0/default.jpg', 1, 3),

       (7, 'Vampyr', '1893',
        'Olje på lerret. "Vampyr" av Edvard Munch er en mørk og gåtefull skildring av en kvinne som henger over en skjør mann. Munchs dramatiske fargebruk og følelsesladde stil skaper et sterkt bilde som utforsker temaer som begjær og frykt. Bildets intense og lidenskapelige natur antyder en dypere, mer sammensatt menneskelig erfaring, og inviterer seeren til å reflektere over livets iboende dualitet og konflikter.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/4760/full/max/0/default.jpg', 1, 3),

       (8, 'Pubertet', '1894',
        'Olje på ugrunndert lerret. Edvard Munchs "Pubertet" skildrer en ung jente i en intim og sårbar situasjon, fanget i grenselandet mellom barndom og voksenliv. Munchs bruk av mørke skygger og sterke kontraster fremhever det kompliserte landskapet av frykt, usikkerhet og forventning som er forbundet med puberteten. Dette innsiktsfulle bildet inviterer betrakteren til å reflektere over overgangsfasene i livet og de dype endringene de medfører.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/4746/full/max/0/default.jpg', 1, 3),

       (9, 'Hode ved hode', '1905',
        'Trenistt trykt i farger. Edvard Munchs verk "Hode ved Hode", et kraftig uttrykk for menneskelige relasjoner og innbyrdes kompleksitet, er en tydelig refleksjon av hans mestring av de tre hovedteknikkene i grafikk - radering, litografi og tresnitt. Tresnitt-teknikken, som inspirerte Munch til å utvikle sin unike stil som kunstner, brukes her til å skape et sterkt bilde av to menneskehoder som er forbundet eller innesluttet i hverandre. Dette kunstverket utforsker temaer som identitet, samhørighet og individualitet på en utfordrende og visuelt imponerende måte.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/4717/full/max/0/default.jpg', 1, 6),

       (10, 'Pikene på broen', '1927',
        'Olje på lerret. Edvard Munchs "Pikene på Broen" er en mesterlig skildring av unge jenter på en bro. Gjennom fargerike og uttrykksfulle penselstrøk skaper Munch et kraftfullt bilde som utforsker temaer som fellesskap og ensomhet. Silhuettene som reflekteres i vannet under antyder en dypere, mer sammensatt menneskelig erfaring, og inviterer betrakteren til å reflektere over menneskets isolasjon og forbindelser.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/5023/full/max/0/default.jpg', 1, 3),

       (11, 'Døden i sykeværelset', '1895',
        'Edvard Munchs maleri "Døden i sykeværelset" er et sterkt og symbolsk verk som ble malt i 1893. Det skildrer en scene i et sykeværelse der døden er til stede og observerer en gruppe mennesker. "Døden i sykeværelset" viser et rom med flere mennesker som er i ulike stadier av sykdom og lidelse. I midten av komposisjonen står en skikkelse kledd i sort, som representerer døden. Døden har et dystert og skremmende utseende og er et tydelig sentralt fokus i bildet.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/4933/full/max/0/default.jpg', 1, 3),

       (12, 'Livets dans', '1925',
        'Olje på lerret. "Livets Dans" av Edvard Munch er en levende fremstilling av forskjellige stadier i menneskelivet, fanget i en sirkulær dans. Munchs dynamiske penselstrøk og sterke farger skaper et bilde som utforsker temaer som kjærlighet, begjær, aldring og død. Denne rike scenen inviterer betrakteren til å reflektere over livets syklus og de dype følelsene og erfaringene som former vår menneskelige eksistens.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/5439/full/max/0/default.jpg', 1, 3),

       (13, 'Selvportrett på glassverandaen', '1930-1933',
        'Malt på med olje på fabrikkgrundert plate av mahogni. En av flere kjente selvportretter Munch malte gjennom sin tid.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/5008/full/max/0/default.jpg', 1, 3),

       (14, 'Arbeidere på hjemvei', '1913-1914',
        'Olje på lerret. "Arbeidere på Hjemvei" av Edvard Munch skildrer hverdagslige arbeidere som returnerer hjem etter en lang dags arbeid. Gjennom sterke linjer og duse farger fremhever Munch den trette, men bestemte marsjen til arbeiderne. Dette rørerende bildet inviterer betrakteren til å reflektere over arbeidets rolle i livet, og menneskets utrettelige streben og utholdenhet i hverdagen.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/4861/full/max/0/default.jpg', 1, 3),

       (15, 'Overraskelsen', '1907',
        'Olje på lerret. "Overraskelsen" av Edvard Munch er en levende fremstilling av en mann, fanget i et øyeblikk av overraskelse eller sjokk. Gjennom livlige farger og dramatiske penselstrøk skaper Munch et bilde som utforsker temaer rundt uventede hendelser og reaksjoner. Dette innsiktsfulle bildet inviterer betrakteren til å reflektere over livets uforutsigbarhet og de intense følelsene det kan fremkalle.',
        'https://emuseum.oslo.kommune.no/apis/iiif/image/v2/5088/full/max/0/default.jpg', 1, 3),

       (16, 'Dagligstuen i Fossveien 7', '1879-1880',
        ' Malt med vannfarge. Dette maleriet ble malt i perioden 1879-1880 og gir et glimt av Munchs tidlige karriere og hans interesse for å portrettere interiører. Maleriet avbilder en dagligstue i Fossveien 7, som var Munchs barndomshjem i Christiania (nåværende Oslo). Det er et intimt og personlig bilde som fanger øyeblikket i et vanlig hjem. Munch bruker nøye komponerte linjer og lyse farger for å skape en atmosfære av ro og varme.',
        'https://munch.emuseum.com/no/internal/media/dispatcher/1461/preview;jsessionid=85F2245D0A3F51F5033159EDC982F77F',
        1, 3),

       (17, 'Natt i Saint-Cloude', '1892',
        'Bildet er laget gjennom risse-metoden radering. Dette maleriet ble skapt i 1890 under Munchs tidlige eksperimentelle periode og er et av hans mest kjente verk. "Natt i Saint-Cloud" portretterer et naturlandskap i nærheten av Paris, der Munch tilbrakte mye tid i løpet av sin kunstneriske utforskning. Maleriet er preget av Munchs karakteristiske stil og er utformet ved bruk av radering som går ut på å risse bildet inn i en plate.',
        'https://www.munchmuseet.no/globalassets/kunstverk/nattsaintcloud.jpg?mode=max&quality=95&w=1400', 1, 3);


INSERT INTO painting_theme (painting_ID, theme_ID)

VALUES (1, 1),

       (1, 5),

       (1, 8),

       (2, 5),

       (2, 9),

       (3, 1),

       (3, 5),

       (3, 6),

       (4, 9),

       (4, 10),

       (5, 3),

       (5, 6),

       (6, 6),

       (6, 7),

       (6, 8),

       (6, 9),

       (7, 6),

       (7, 9),

       (7, 10),

       (8, 3),

       (8, 6),

       (8, 7),

       (8, 9),

       (9, 6),

       (9, 8),

       (9, 9),

       (10, 1),

       (10, 4),

       (10, 5),

       (10, 9),

       (10, 10),

       (11, 6),

       (11, 7),

       (11, 8),

       (11, 9),

       (12, 1),

       (12, 4),

       (12, 6),

       (12, 7),

       (12, 8),

       (12, 9),

       (12, 10),

       (13, 3),

       (13, 4),

       (13, 7),

       (14, 4),

       (14, 7),

       (15, 9),

       (16, 3),

       (16, 4),

       (16, 7),

       (17, 3),

       (17, 4),

       (17, 7),

       (17, 9);



INSERT INTO comment (comment_ID, nickname, comment_text, comment_date, likes, painting_ID)

VALUES (1, 'Munch Lover',
        'Virkelig fascinerende bilde! Fargene og teksturene fanger virkelig opp intensiteten og dybden i forskningen. Munchs evne til å formidle menneskelig erfaring gjennom kunsten er utrolig',
        '2023-06-01 12:30:15', 120, 1),

       (2, 'Munch Lover',
        'Et mesterverk! Dette maleriet viser Munchs unike stil og skildrer en ekte hyllest til vitenskapen. Jeg blir aldri lei av å betrakte hans arbeid, det får meg alltid til å tenke',
        '2023-06-01 12:30:16', 10, 1),

       (3, 'Munch Lover',
        'Jeg er virkelig imponert over dette bildet. Munchs evne til å vise menneskelig samspill og følelser i en så kraftfull scene er utrolig. Jeg kan nesten høre bruset av menneskemengden når jeg ser på det.',
        '2023-06-01 12:30:17', 166, 2),

       (4, 'Munch Lover',
        'Dette maleriet gir meg gåsehud. Det er så mye emosjon og intensitet i hver enkelt figur. Munchs evne til å formidle følelser gjennom penselstrøkene er uten sammenligning.',
        '2023-06-01 12:30:18', 200, 2),

       (5, 'Munch Lover',
        'Dette maleriet er bare helt fantastisk. Solens stråler som strømmer ut fra midten gir et sterkt inntrykk av håp og fornyelse. Fargene er så levende og intense, det føles nesten som jeg kan føle varmen fra solen',
        '2023-06-01 12:30:19', 150, 3),

       (6, 'Munch Lover',
        'Solen av Munch er et eksepsjonelt verk. Det er noe veldig symbolsk og livsbekreftende i måten solen stråler ut over landskapet på. Det minner oss om naturens evige syklus og livets fornyelse. Munchs verk evner alltid å berøre meg på en dyp måte.',
        '2023-06-01 12:30:20', 120, 3),

       (7, 'Munch Lover',
        'Dette er virkelig et ikonisk bilde. Munch har fanget essensen av menneskelig angst så utrolig godt. Jeg føler en ubehagelig resonans med skikkelsen på broen hver gang jeg ser på det',
        '2023-06-01 12:30:21', 120, 4),

       (8, 'Munch Lover',
        'Skrik er et mesterverk. Munchs evne til å formidle universell angst og fortvilelse er fantastisk. Fargene, linjene og den ensomme figuren i forgrunnen skaper en uforglemmelig stemning. Det er virkelig et bilde som berører sjelen.',
        '2023-06-01 12:30:22', 120, 4),

       (9, 'Munch Lover',
        'Det er noe så mystisk og forførende ved dette maleriet. Kombinasjonen av sensualitet og renhet som Munch har skapt i Madonna er fortryllende. Det er en veldig sterk fremstilling av femininitet',
        '2023-06-01 12:30:23', 120, 5),

       (10, 'Munch Lover',
        'Madonna av Munch er et dypt rørende kunstverk. Det er så mye symbolikk og kompleksitet vevd inn i dette portrettet. Det fanger virkelig sjelen og essensen av kvinnen, samtidig som det viser den kontrasten mellom det jordiske og det guddommelige. Enestående!',
        '2023-06-01 12:30:24', 120, 5),

       (11, 'Munch Lover',
        'Dette maleriet treffer virkelig hjertet. Det er så mye sorg og fortvilelse i bildet, men også en sterk kjærlighet og omsorg. Munchs evne til å skildre slike sterke menneskelige følelser er utrolig.',
        '2023-06-01 12:30:25', 120, 6),

       (12, 'Munch Lover',
        'Det Syke Barn er et kunstverk som virkelig rører ved sjelen. Munchs penselstrøk fanger den hjerteskjærende virkeligheten av sykdom og tap på en så levende og følelsesladet måte. Det er en dyp og personlig refleksjon over livets skjørhet.',
        '2023-06-02 14:30:26', 101, 6),

       (13, 'Munch Lover',
        'Dette bildet er så intenst og lidenskapelig. Det er noe veldig lokkende og skremmende på samme tid i denne vampyrskikkelsen. Virkelig kraftfullt',
        '2023-06-02 14:30:27', 101, 7),

       (14, 'Munch Lover',
        'Vampyr er et dypt symbolsk maleri. Det er en slående representasjon av lidenskap, begjær og destruktivitet. Munchs farger og komposisjon gjør dette til et uforglemmelig kunstverk.',
        '2023-06-02 14:30:28', 101, 7),

       (15, 'Munch Lover',
        'Det er noe så ekte og rått ved dette bildet. Munch har fanget usikkerheten og selvtilliten som følger med puberteten på en så treffende måte',
        '2023-06-02 14:30:29', 101, 8),

       (16, 'Munch Lover',
        'Pubertet er et bilde som virkelig formidler overgangen mellom barndom og voksenliv. Det er en følelsesladet skildring av vekst og usikkerhet. Munchs talent for å fange menneskelige erfaringer er uovertruffen',
        '2023-06-02 14:30:30', 101, 8),

       (17, 'Munch Lover',
        'Dette er så intenst og intimt. Du kan nesten føle den sterke følelsesmessige forbindelsen mellom de to figurene. Det er virkelig vakkert',
        '2023-06-02 14:30:31', 101, 9),

       (18, 'Munch Lover',
        'Hode ved Hode er et fengslende verk. Det er en dyp utforskning av menneskelig nærhet og følelsesmessig forbindelse. Munchs arbeid berører alltid på en så dyp måte',
        '2023-06-02 14:30:32', 65, 9),

       (19, 'Munch Lover',
        'Jeg elsker fargebruken i dette maleriet. Det er en slik livlighet og energi i scenen. Det får meg til å føle at jeg er der med jentene på broen',
        '2023-06-03 13:20:33', 65, 10),

       (20, 'Munch Lover',
        'Pikene på Broen er et nydelig stykke arbeid. Det er en idyllisk og levende skildring av barndom og uskyld. Munchs talent for å skape stemning og atmosfære er bemerkelsesverdig',
        '2023-06-03 13:20:34', 65, 10),

       (21, 'Munch Lover',
        'Dette maleriet er hjerteskjærende. Det er så mye sorg og smerte i rommet, men også en følelse av fred. Det er et virkelig sterkt bilde',
        '2023-06-03 13:20:35', 65, 11),

       (22, 'Munch Lover',
        'Døden på Sykeværelset er en gripende skildring av tap og sorg. Munchs evne til å formidle så dype og universelle menneskelige erfaringer gjennom hans kunst er virkelig imponerende',
        '2023-06-03 13:20:36', 65, 11),

       (23, 'Munch Lover',
        'Dette maleriet er så levende og dynamisk. Det er en flott skildring av livets forskjellige stadier og følelser. Jeg elsker det!',
        '2023-06-03 13:20:37', 65, 12),

       (24, 'Munch Lover',
        'Livets Dans er et uttrykk for livets syklus og dens intensitet. Munchs evne til å formidle livets glede, smerte, kjærlighet og død er forbløffende.',
        '2023-06-03 13:20:38', 65, 12),

       (25, 'Munch Lover',
        'Jeg elsker det reflekterende og introspektive aspektet ved dette selvportrettet. Det gir et innsiktsfullt blikk inn i Munchs sinnsstemning.',
        '2023-06-03 13:20:39', 22, 13),

       (26, 'Munch Lover',
        'Dette er et dypt personlig og følelsesmessig selvportrett. Munchs evne til å uttrykke sine egne følelser og refleksjoner i sine verk er imponerende',
        '2023-06-03 13:20:40', 22, 13),

       (27, 'Munch Lover',
        'Dette maleriet er så kraftfullt. Det viser virkelig hverdagslivet og strevet til arbeiderklassen. Jeg setter virkelig pris på Munchs evne til å vise den virkelige verden.',
        '2023-06-03 13:20:41', 22, 14),

       (28, 'Munch Lover',
        'Arbeidere på Hjemvei er en hyllest til de hardt arbeidende. Det er et sterkt sosialt kommentar som uttrykker solidaritet med arbeiderklassen.',
        '2023-06-03 13:20:42', 22, 14),

       (29, 'Munch Lover',
        'Jeg elsker det dramatiske aspektet ved dette maleriet. Det er en slik intensitet og sjokk i mannen sitt uttrykk, det er virkelig gripende.',
        '2023-06-03 13:20:43', 22, 15),

       (30, 'Munch Lover',
        'Overraskelsen er en kraftfull skildring av sjokk og forbauselse. Munchs evne til å fange øyeblikkets følelser er utrolig.',
        '2023-06-03 13:20:44', 22, 15),

       (31, 'Munch Lover',
        'Dette maleriet gir en så hjemmekoselig og avslappet følelse. Jeg elsker det detaljerte interiøret og den varme atmosfæren.',
        '2023-06-03 13:20:45', 22, 16),

       (32, 'Munch Lover',
        'Dette maleriet gir en så hjemmekoselig og avslappet følelse. Jeg elsker det detaljerte interiøret og den varme atmosfæren.',
        '2023-06-03 13:20:45', 22, 16),

       (33, 'Munch Lover',
        'Dagligstuen i Fossveien 7 er en nydelig skildring av hjemlig liv. Det er så mange detaljer å se på, og det gir en så rolig og behagelig stemning. Virkelig en perle fra Munch.',
        '2023-06-03 13:20:46', 22, 16),

       (34, 'Munch Lover',
        'Dette maleriet er så stemningsfullt. Jeg kan nesten føle nattens ro og stillhet bare ved å se på det. De myke fargene og lyset fra månen skaper en så drømmende atmosfære.',
        '2023-06-03 13:20:47', 98, 17),

       (35, 'Munch Lover',
        'Natt i Saint-Cloud er et mesterverk av Munch. Det skaper en følelse av ro og ettertanke som er så beroligende. Munchs evne til å formidle stemningen i et øyeblikk gjennom kunsten sin er virkelig imponerende.',
        '2023-06-03 13:20:48', 99, 17);

