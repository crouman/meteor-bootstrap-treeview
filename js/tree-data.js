$(function() {

  var defaultData = [
    {
      text: 'Corporate',
      href: '#parent1',
      tags: ['4'],
      nodes: [
        {
          text: 'Adelaide (1300)',
          href: '#child1',
          tags: [''],
          nodes: [
            {
              text: 'No Category',
              href: '#grandchild1',
              tags: ['CAD 0.00']
            },
            {
              text: 'Subtotal - Adelaide (1300)',
              href: '#grandchild2',
              tags: ['CAD 0.00']
            }
          ]
        },
        {
          text: 'American Somoa',
          href: '#child3',
          tags: [''],
          nodes: [
            {
              text: 'Invoice Group Discounts',
              href: '#grandchild3',
              tags: ['CAD 0.06']
            },
            {
              text: 'Taxes & Fees',
              href: '#grandchild4',
              tags: ['CAD 34.35']
            }
          ]
        }
      ]
    },
    {
      text: 'Parent 2',
      href: '#parent2',
      tags: ['0']
    },
    {
      text: 'Parent 3',
      href: '#parent3',
       tags: ['0']
    },
    {
      text: 'Parent 4',
      href: '#parent4',
      tags: ['0']
    },
    {
      text: 'Parent 5',
      href: '#parent5'  ,
      tags: ['0']
    }
  ];
})
