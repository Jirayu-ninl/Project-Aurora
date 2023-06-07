'use server'

import Si from 'systeminformation'

const Data = () => {
  return {
    name: 'device',
    contents: [
      {
        isHeader: false,
        name: 'Timezone',
        value:
          Si.time().timezone.slice(0, -2) + '.' + Si.time().timezone.slice(-2),
        className: '',
      },
      {
        isHeader: false,
        name: 'Platform',
        value: Si.osInfo().then((data) => data.platform),
        className: '',
      },
      {
        isHeader: false,
        name: 'OS',
        value: Si.osInfo().then((data) => data.distro),
        className: '',
      },
      {
        isHeader: false,
        name: 'Architecture',
        value: Si.osInfo().then((data) => data.arch),
        className: '',
      },
      {
        isHeader: false,
        name: 'Kernel',
        value: Si.osInfo().then((data) => data.kernel),
        className: '',
      },
      {
        isHeader: false,
        name: 'GPU',
        value: Si.graphics().then((data) => data.controllers[0].name),
        className: '',
      },
      {
        isHeader: false,
        name: 'GPU Vendor',
        value: Si.graphics().then((data) => data.controllers[0].vendor),
        className: '',
      },
      {
        isHeader: false,
        name: 'GPU vRAM',
        value: Si.graphics().then((data) =>
          data.controllers[0].vram
            ? (data.controllers[0].vram / 1024).toFixed(2) + ' GB'
            : 'n/a',
        ),
        className: '',
      },
      // {
      //   isHeader: false,
      //   name: 'test',
      //   value: EnvInfo()['System'],
      // },
      {
        isHeader: false,
        name: 'CPU',
        value: Si.cpu().then((data) => data.brand),
        className: 'text-right',
      },
      {
        isHeader: false,
        name: 'CPU Cores',
        value: Si.cpu().then((data) => data.physicalCores),
        className: '',
      },
      {
        isHeader: false,
        name: 'CPU Treads',
        value: Si.cpu().then((data) => data.cores),
        className: '',
      },
      {
        isHeader: false,
        name: 'CPU Speed',
        value: Si.cpu().then((data) => data.speed + 'GHz'),
        className: '',
      },
      {
        isHeader: false,
        name: 'CPU Speed Max',
        value: Si.cpu().then((data) => data.speedMax + 'GHz'),
        className: '',
      },
      {
        isHeader: false,
        name: 'Memory',
        value: Si.mem().then(
          (data) => (data.total / 1024 / 1024 / 1024).toFixed(2) + 'GB',
        ),
        className: '',
      },
      {
        isHeader: false,
        name: 'Display',
        value: Si.graphics().then(
          (data) =>
            data.displays[0].currentResX + 'x' + data.displays[0].currentResY,
        ),
        className: '',
      },
      {
        isHeader: false,
        name: 'Current Refresh Rate',
        value: Si.graphics().then(
          (data) => data.displays[0].currentRefreshRate,
        ),
        className: '',
      },
    ],
  }
}

export default Data
