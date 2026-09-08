Kevin Christianto Husein
## Q1

I chose the sports industry and my external users are the coaching staff of a football club: the head coach, assistant coach, or performance analyst. Usually, several staff members sit around a laptop for a match-planning meeting a few days before a game.

Today, the coaches or analyst watches several of the opponent's recent matches, save important clips, obtain statistics from a data provider, sorts the data manually, and creates an overview of the opponent. The coaching staff then goes through the summary and discusses the tactical game plan, which weaknesses should the team exploit, and decide on the effective live training sessions.

ScoutEdge does not replace the analyst's football knowledge or the need to watch matches. Instead, it removes some of the manual work and changes the order of the process. The three most important weaknesses are already ranked. This means that the coaches can verify if they agree or disagree with the weaknesses that they observed. The main time saving is the several hours the analyst previously spent preparing the manual data and building the right targeted training sessions and tactics.

## Q2

**Augmented capacity:**
I have very minimal knowledge in coding but with AI I was able to create a working three-screen website. This allowed me to spend most of my time thinking about the product rather than learning how to code.

The biggest benefit was that I could focus on what coaches actually need from a footballing perspective. Hence, I decided that the coach's main job is to identify three important weaknesses, rather than simply exploring too many data. Without AI, I probably would have spent most of my time learning technical skills instead of making these product decisions.

**Constrained capacity:**
At the same time, I realised that the prompts needs some revamping and I cannot totally rely on it providing me an app that I have in mind. For example, Prompt 2 created a Match Overview with 18 rows of statistics. I decided that there should be a maximum of 10 rows because 18 felt too long and wordy which can confuse the coach and the weaknesses are not really targeted. However, I did not specify which 10 rows should remain or why. Because I could not properly read or evaluate the underlying data, I accepted the change without knowing whether the eight removed rows were important. This could have created a problem if subsequent screens was using statistics that were no longer available.

## Q3 

One moment where my judgment clearly changed the outcome was Prompt 3 because I read it as if I were the coach. My original goal said that there should be three cweaknesses with supporting statistics. Technically, the first version met that requirement, but the second and third weaknesses were much less detailed. Positioning myself as the coach and user helped me notice the problem.

However, for prompt 2, I was technically trying to improve the app but did not really verify it. I simply decided that 18 rows were too many and reduced them to 10. I did not check which rows were removed and made a decision without enough information.

Looking forward, I think the sorting and displaying of the statistics should eventually be out of the loop. It is repetitive, easy to reverse, and a person can quickly check whether the output looks correct. Before allowing this, I would want the ranking rule to be clearly defined and tested across more matches to make sure it is consistent.

However, choosing the three weaknesses for the team's training priorities should remain in the loop. This decision affects how players train for an important match, and the consequences may only become clear during the actual game. The coach should therefore make the final decision regardless of the facts that were already provided.

## Q4 

When I compared my original prompts with the website, the biggest difference I noticed was that AI Studio added much more information and functionality than I originally planned. For example, I only asked for key performance statistics on the Match Overview, but it created 18 statistics, league benchmarks, tactical scout notes, and a manager tactical summary. On Match Preparation, I only asked for a tactical focus and training focus, but it also created detailed training drills, coaching cues, player roles, and a session-completion toggle.

These additions can be seen as positive or negative. Some features actually made me think about things I had not considered before and could be useful for a coach. For example, the detailed training drills made the Match Preparation screen more actionable than my original idea. This showed me that AI can enhance ideas. However, it also means I need to decide which additions help the user and which simply make it complicated.

I only realised how much the AI had added when I compared the finished website with my original prompts while writing this reflection. If I were building it again, I would review each screen against my original prompt before moving on, and then separately review the additional features to decide whether they should stay. This would allow me to keep useful ideas from the AI while making sure the final product still reflects my own product decisions.

## Q5 
1. Require a technical review before an AI-built application is shared. My own app created features that I did not notice, so every feature should be verified before it is published.

2. Require a clear rule behind AI-generated data changes. In my build, I asked to "reduce it to 10" without knowing which eight statistics would be removed, so we should require a person making the change to decide which information remain before approving it.

3. Require a user-based review before release. I initially accepted the Weakness Analysis because it met my checklist even though ranks two and three had less detail than rank one, so someone should review every the product from a user's perspective before it goes live.
