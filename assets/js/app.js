/*global angular */
(function () {
    'use strict';
    var app = angular.module('uomocktrial', []),
        roster = [
            { name: "Erin Casini",
                image: "assets/img/headshots/erin.jpg",
                description: "Erin is a sophomore from Saratoga, California, majoring in Classics with a concentration in Greek and Latin. This will be her fourth year as a mock trial competitor and her second year with UOMT, where she serves as the team’s Social Chair. Erin served as captain of the St. Francis High School mock trial team her senior year in Saratoga. Erin plans to go to law school after receiving her degree at UO and pursue a career in trial advocacy."},
        
            { name: "Thomas Dal Pino",
                image: "assets/img/headshots/thomas.jpg",
                description: "Thomas is the Vice President of Instruction of the UOMT. Currently in his third year at the University, he has been placed on the Dean’s List for three consecutive terms and is a Political Science major. His interests include law, politics, and history. He presently resides in Eugene, Oregon but hails from Oakland, California — where, as a student at Oakland Technical High School, he won several awards from the Philip A. Harley Mock Trial Competition."},

            { name: "Phillip Kriegel",
                image: "assets/img/headshots/phillip.jpg",
                description: "Phillip is a junior from Beaverton, Oregon, studying Mathematics and Computer Science. This will be his second year of mock trial, and second with UOMT, where he serves on the cabinet as Vice President of Finances. Known for exceptional Slavic witness portrayals and brutally emotional acting, opponents often refer to him only as “The Volk”. He owes his success to the words of Russell Wilson, quarterback of the world champion Seahawks: “Why not us?”"},

            { name: "Greg Mina",
                image: "assets/img/headshots/greg.jpg",
                description: "Greg is a junior from Colorado Springs, Colorado, double majoring in Political Science and Spanish. Greg is entering his seventh year of mock trial and third with UOMT, having competed four years for Palmer High School in Colorado Springs. In high school, Greg won two outstanding attorney awards while leading Palmer to two state championship rounds, and garnered the most individual ranks in the state in 2011. Greg is now in his second year as President of UOMT and third year as varsity captain. Greg works part time on campus as a lifeguard and plans on attending law school, following a proud family tradition."},

            { name: "Emily Olson",
                image: "assets/img/headshots/blank.png",
                description: "Bio in progress"},

            { name: "Emalee Russell",
                image: "assets/img/headshots/blank.png",
                description: "Emalee is a junior from Alamo, California. This is her first year with UOMT, and Emalee is thrilled to be participating. She hopes her experience as an actor will add to her team’s already incredible presence in competition. Her experiences in as an actor in Theatre have won her numerous awards including The Jim Kirkwood Award for the Pursuit of Acting Excellence, the Performer of the Year Award at San Ramon Valley Theatre, and an Irene Ryan nomination for her work as Karen in The Children’s Hour at Diablo Valley College. She is honored to be working with such a driven and talented team, and is excited to do her part in securing victory for The University of Oregon."},

            { name: "Devon Staton-Ralston",
                image: "assets/img/headshots/devon.jpg",
                description: "Devon is a junior from Eugene, Oregon, double majoring in Finance and Economics, with a minor in Political Science. This is Devon’s second year in mock trial, and second year with UOMT. Devon competed for Willamette High School in Eugene in speech and debate tournaments, and currently helps coach the team. Devon is considering law school and leaving his post-grad options open."},

            { name: "Charles Steenkolk",
                image: "assets/img/headshots/blank.png",
                description: "Charles Steenkolk is a junior from Boise, Idaho, studying History and Spanish. This is Charles’ second year competing with UOMT, and second year serving the team as the Vice President of Operations. Charles can portray a witness or work on a counsel table as an attorney. Charles uses his finely trimmed beard to intimidate his opponents into submission. He has also shown his dedication to the program by shaving his beard into a terrible, terrible mustache to portray a security officer."},

            { name: "Ariana Donaville",
                image: "assets/img/headshots/ariana.jpg",
                description: "Ariana is sophomore from Oakland, California majoring in business at UO. She has three years of mock trial experience starting in high school where she was recognized as first place clerk and bailiff Alameda County. This is Ariana’s first year with UOMT. Ariana's hobbies include reading, shopping, working out, and playing golf."},

            { name: "Sara Gaylon",
                image: "assets/img/headshots/blank.png",
                description: "Sara is a sophomore from Sacramento, California. She studies Economics and Environmental Studies with an interest in environmental law in the future. This is her first full year with UOMT, having spent time training and practicing with the team in spring of 2014.  She enjoys bright pink sunsets and backpacking through the wilderness."},

            { name: "Emily Mason",
                image: "assets/img/headshots/blank.png",
                description: "Bio in progress"},

            { name: "Riley Olson",
                image: "assets/img/headshots/blank.png",
                description: "Bio in progress"},

            { name: "Nathan Potter",
                image: "assets/img/headshots/blank.png",
                description: "Bio in progress"},

            { name: "Amy Schenk",
                image: "assets/img/headshots/blank.png",
                description: "Amy is a freshman from Portland Oregon and is currently double majoring in International Studies and Political Science.  She has four years of high school mock trial experience, earning two Classroom Law Project MVP awards.  Along with mock trial, Amy also participated in the Wilson High School Constitution Team, founding the team her Junior year and participating Senior year. This is her first year with UOMT.  Amy hopes to continue on to law school and eventually work in the field of International Law."},

            { name: "Jacob Wisda",
                image: "assets/img/headshots/blank.png",
                description: "Jacob is a freshman from La Crescenta, California. Jacob was a troubled inner-city teen from Los Angeles, with only a chip on his shoulder and a love for playful yet poignant narrative, until he discovered his talent for public speaking that is. In high school, Jacob competed in both Speech and Debate and Mock Trial. In Mock Trial, he received many MVP awards, and at the national Speech and Debate Tournament in 2014, he placed fifth in the nation in Impromptu Speaking; while at the California State Competition that same year, he placed 12th in the state for Parliamentary Debate. As a freshman at the University of Oregon, Jacob is an English major and plans on earning a PhD after graduation."},

            { name: "Mai-Ling Maas",
                image: "assets/img/headshots/blank.png",
                description: "Mai-Ling is a freshman from Arlington, Texas, majoring in English. She did mock trial for two years in high school in Arlington. While she doesn't want to be a lawyer, she enjoys working through puzzles and playing mind games. Her favorite part of mock trial is smirking at lawyers who fail to outsmart her, and also the people are pretty cool."},

            { name: "John Dechert",
                image: "assets/img/headshots/blank.png",
                description: "John is a freshman from White City, Oregon, and is studying mathematics and computer sciences at the University of Oregon. John enjoys spending his days playing chess and eating, among other things. Nonetheless, John has professional interests in both law and the computer fields. This is John’s first year with UOMT."},

            { name: "Michaela Malos",
                image: "assets/img/headshots/blank.png",
                description: "Michaela is freshman from Corvallis, Oregon, majoring in Political Science with a dual-minor in History and Economics, and is a graduate of Corvallis High School. In high school, she qualified for state with her team twice, receiving four Most Valuable Participant awards at two Oregon State Mock Trial Competitions, as well as eight MVP awards at three separate district competitions. Michaela was also competitive in Parliamentary Debate in high school along with impromptu speaking events. She qualified for the Oregon State Speech and Debate Competition four times."},

            { name: "Ben Neal",
                image: "assets/img/headshots/blank.png",
                description: "Bio in progres"},

            { name: "Niharika Sachdeva",
                image: "assets/img/headshots/blank.png",
                description: "Bio in progress"},

            { name: "Tyler Quatraro",
                image: "assets/img/headshots/blank.png",
                description: "Bio in progress"},

            { name: "Taylor Raffanti",
                image: "assets/img/headshots/blank.png",
                description: "Taylor is a freshman from Sacramento, California, and is a political science major. This is her first year of mock trial and first with UOMT. Taylor has an impressive theater resume however, as she has been involved with theater through Franklin Theater Company in Elk Grove, CA for 6 years."}
        ];
    
    app.controller('MockController', function () {
        this.roster = roster;
    });
    
    
    
}());