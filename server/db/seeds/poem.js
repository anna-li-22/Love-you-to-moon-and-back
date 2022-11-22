/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('poem').del()
  await knex('poem').insert([
    {
      author_id: '1',
      poem_id: '1',
      poem_title: 'Nostalgia',
      poem_text: `I wish I could remember that first day,
      First hour, first moment of your meeting me,
      If bright or dim the season, it might be
      Summer or Winter for aught I can say;
      So unrecorded did it slip away,
      So blind was I to see and to foresee,
      So dull to mark the budding of my tree
      That would not blossom yet for many a May.
      If only I could recollect it, such
      A day of days! I let it come and go
      As traceless as a thaw of bygone snow;
      It seemed to mean so little, meant so much;
      If only now I could recall that touch,
      First touch of hand in hand – Did one but know!`,
      poem_from: 'I Wish I Could Remember That First Day',
      poem_type: 'Love',
    },
    {
      author_id: '2',
      poem_id: '2',
      poem_title: 'Flirtation',
      poem_text: `After all, there’s no need
      to say anything
      
      at first. An orange, peeled
      and quartered, flares
      
      like a tulip on a wedgewood plate
      Anything can happen.
      
      Outside the sun
      has rolled up her rugs
      
      and night strewn salt
      across the sky. My heart
      
      is humming a tune
      I haven’t heard in years!
      
      Quiet’s cool flesh—
      let’s sniff and eat it.
      
      There are ways
      to make of the moment
      
      a topiary
      so the pleasure’s in`,
      poem_from: 'Flirtation',
      poem_type: 'Love',
    },
    {
      author_id: '3',
      poem_id: '3',
      poem_title: 'More than friends',
      poem_text: `Love is like the wild rose-briar,
      Friendship like the holly-tree—
      The holly is dark when the rose-briar blooms
      But which will bloom most constantly?
      The wild rose-briar is sweet in spring,
      Its summer blossoms scent the air;
      Yet wait till winter comes again
      And who will call the wild-briar fair?
      Then scorn the silly rose-wreath now
      And deck thee with the holly’s sheen,
      That when December blights thy brow
      He still may leave thy garland green.`,
      poem_from: 'Love and Friendship',
      poem_type: 'Love',
    },
    {
      author_id: '4',
      poem_id: '4',
      poem_title: 'Fulfillment',
      poem_text: `The time will come
      when, with elation
      you will greet yourself arriving
      at your own door, in your own mirror
      and each will smile at the other’s welcome,
      
      and say, sit here. Eat.
      You will love again the stranger who was your self.
      Give wine. Give bread. Give back your heart
      to itself, to the stranger who has loved you
      
      all your life, whom you ignored
      for another, who knows you by heart.
      Take down the love letters from the bookshelf,
      
      the photographs, the desperate notes,
      peel your own image from the mirror.
      Sit. Feast on your life.`,
      poem_from: 'Love After Love',
      poem_type: 'Love',
    },
    {
      author_id: '5',
      poem_id: '5',
      poem_title: 'to John Adams',
      poem_text: `My Dearest Friend,
      …should I draw you the picture of my heart it would be what I hope you would still love though it contained nothing new. The early possession you obtained there, and the absolute power you have obtained over it, leaves not the smallest space unoccupied.
      
      I look back to the early days of our acquaintance and friendship as to the days of love and innocence, and, with an indescribable pleasure, I have seen near a score of years roll over our heads with an affection heightened and improved by time, nor have the dreary years of absence in the smallest degree effaced from my mind the image of the dear untitled man to whom I gave my heart.`,
      poem_from: 'Abigail Adams ',
      poem_type: 'Love',
    },
    {
      author_id: '6',
      poem_id: '6',
      poem_title: 'First love letter to Arabella',
      poem_text: `My dear Arabella,
      A cultured land with heated fortunes, salt rains on dried opulence, let’s not waste love on time; yet the day may arrive when the mountains once moved, moved my mantels of love for thee;
      thee dreams of what paradise might be, what a woman’s soul must see, don’t her prophets know as they have disdained her to endure;`,
      poem_from: 'Shakespeare',
      poem_type: 'Love',
    },
    {
      author_id: '6',
      poem_id: '7',
      poem_title: 'Second love letter to Arabella',
      poem_text: `My dear Arabella,
      Feel not comfort in fields of sunflowers but in thy nestled grace where the seeds of true nectar produce such heirs of innocence, touch the truffles of my magnificent heartache;

      She gazed in wonder “can he calmly sleep” while her eyes fell upon him or a ravage weep; what sudden spell makes me so dear; can we meet halfway so such magic does not disappear;`,
      poem_from: 'Shakespeare',
      poem_type: 'Love',
    },
    {
      author_id: '6',
      poem_id: '8',
      poem_title: 'Third love letter to Arabella',
      poem_text: `My dear Arabella,
      Bring me nots to such have nots as my heart simply yearns for thee; wrap me in thy bosoms as when death wraps me in its shadows, I might simply die for thee;

let the whistles not blow and the bells not sound a clouded mind; let rapture of such folly be forgotten as thy lips simply sense me;`,
      poem_from: 'Shakespeare',
      poem_type: 'Love',
    },
    {
      author_id: '6',
      poem_id: '9',
      poem_title: 'Fourth love letter to Arabella',
      poem_text: `My dear Arabella,
      As ancient Rome rises to such grace, why does the charm soften in a hasty chase, my treasured thoroughbreds gallop willfully wild, sweats on their beaded skins near the torturous neap, chase the clouds to thy mountains so high, heartfelt cords felt down to the stony grounds, run free in a world of such indulgent eyes;

Imprison me in thy affectionate grace and vow never to let go, take me to a ball and hold me there once again in a song that made my heart ache,`,
      poem_from: 'Shakespeare',
      poem_type: 'Love',
    },
  ])
}
