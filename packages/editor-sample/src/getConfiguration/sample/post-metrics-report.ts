import { TEditorConfiguration } from '../../documents/editor/core';

const POST_METRICS_REPORT: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#EEEEEE',
      canvasColor: '#FFFFFF',
      textColor: '#242424',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block_6B5Ke1N2KdM4STQjw7eEHT',
        'block_VE1bKDbSqiYD9VtmmaYX7w',
        'block_QQqjnauXAixe2LnJXVmHwQ',
        'block_9yEYNZmmmFauyuSKi9iJA9',
        'block_AC6eRbFVSbXHVCg2zutkLu',
        'block_CYXkzjxrj6e4Sb74Kt8quM',
        'block_AUAxG2BgwA6XC8rF5xAaaP',
        'block_C1YvcFvMvzB1Fhxn3uV8zV',
        'block_FsiiokCgr9bZitHn7sx7TB',
        'block_DomD4MLJ58VcMo49vmeTH8',
      ],
    },
  },
  block_6sP1Pi9AimAoti2ZPdNXUf: {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        textAlign: 'left',
      },
      props: {
        height: 16,
        width: null,
        url: 'https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_n3eLjsf37dcjFaj5/Narrative.png',
        alt: '',
        linkHref: null,
        contentAlignment: 'middle',
      },
    },
  },
  block_9G37m6eNPw2MpUj6SYGoq1: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: null,
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      props: {
        childrenIds: ['block_6sP1Pi9AimAoti2ZPdNXUf'],
      },
    },
  },
  block_A8GU16mV1RdP85jaszN7oj: {
    type: 'Avatar',
    data: {
      style: {
        textAlign: 'right',
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      props: {
        size: 32,
        shape: 'circle',
        imageUrl: '{{user.avatarUrl}}',
        fallbackText: '{{user.displayName}}',
        fallbackColor: null,
      },
    },
  },
  block_4WmdbYU15yfdpYcYjsVDBA: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: null,
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      props: {
        childrenIds: ['block_A8GU16mV1RdP85jaszN7oj'],
      },
    },
  },
  block_JQAdLSAtvmfsRih13srJ8m: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: null,
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      props: {
        childrenIds: [],
      },
    },
  },
  block_6B5Ke1N2KdM4STQjw7eEHT: {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 24,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        columnsCount: 2,
        columns: [
          {
            childrenIds: ['block_9G37m6eNPw2MpUj6SYGoq1'],
          },
          {
            childrenIds: ['block_4WmdbYU15yfdpYcYjsVDBA'],
          },
          {
            childrenIds: ['block_JQAdLSAtvmfsRih13srJ8m'],
          },
        ],
      },
    },
  },
  block_VE1bKDbSqiYD9VtmmaYX7w: {
    type: 'Heading',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 24,
          bottom: 0,
          left: 24,
          right: 24,
        },
      },
      props: {
        level: 'h3',
        text: '{{report.duration}}, your posts received',
      },
    },
  },
  block_QQqjnauXAixe2LnJXVmHwQ: {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 48,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 0,
          left: 24,
          right: 24,
        },
      },
      props: {
        text: '{{report.metric.value}}',
      },
    },
  },
  block_9yEYNZmmmFauyuSKi9iJA9: {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        text: '{{report.metric.title}}',
      },
    },
  },
  block_AC6eRbFVSbXHVCg2zutkLu: {
    type: 'Button',
    data: {
      style: {
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 40,
          left: 24,
          right: 24,
        },
      },
      props: {
        buttonBackgroundColor: '#24AF7F',
        buttonStyle: 'rounded',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'medium',
        text: 'View your analytics →',
        url: 'https://narrative.example.com/{{user.username}}/analytics',
      },
    },
  },
  block_CYXkzjxrj6e4Sb74Kt8quM: {
    type: 'Heading',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 24,
          bottom: 8,
          left: 24,
          right: 24,
        },
      },
      props: {
        level: 'h3',
        text: 'Top performing post {{report.duration | downcase}}',
      },
    },
  },
  block_FpDmSnPwiVzBXUvTc4yWFh: {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      props: {
        text: '{{report.topPerformingPost}}',
      },
    },
  },
  block_LjuDF6uu4qWL3Ju3ng63ky: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: null,
        borderColor: null,
        borderRadius: 8,
        padding: {
          top: 24,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        childrenIds: ['block_FpDmSnPwiVzBXUvTc4yWFh'],
      },
    },
  },
  block_AUAxG2BgwA6XC8rF5xAaaP: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: null,
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 16,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        childrenIds: ['block_LjuDF6uu4qWL3Ju3ng63ky'],
      },
    },
  },
  block_C1YvcFvMvzB1Fhxn3uV8zV: {
    type: 'Button',
    data: {
      style: {
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        buttonBackgroundColor: '#EEEEEE',
        buttonStyle: 'rounded',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'medium',
        text: 'Show more',
        url: 'https://narrative.example.com/{{user.username}}/posts',
      },
    },
  },
  block_FsiiokCgr9bZitHn7sx7TB: {
    type: 'Divider',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 40,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      props: {
        lineHeight: 1,
        lineColor: '#24AF7F',
      },
    },
  },
  block_DomD4MLJ58VcMo49vmeTH8: {
    type: 'Text',
    data: {
      style: {
        color: '#474849',
        backgroundColor: null,
        fontSize: 12,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 24,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        text: 'Questions? Just reply to this email.',
      },
    },
  },
};

export default POST_METRICS_REPORT;