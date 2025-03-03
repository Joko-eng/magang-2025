'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import {
  frequencies,
  frequenciesSocMed,
  tokenTiers,
  socialMediaTiers,
  type Frequency,
  type FrequencySocMed,
} from './pricingData'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingComponent() {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0])
  const [frequencySocMed, setFrequencySocMed] = useState<FrequencySocMed>(
    frequenciesSocMed[0],
  )

  // Helper function to render feature text based on the selected network
  const renderFeatureText = (feature: any) => {
    if (typeof feature === 'string') {
      return (
        <>
          <CheckIcon
            className="h-6 w-5 flex-none text-indigo-800"
            aria-hidden="true"
          />
          {feature}
        </>
      )
    }
    if (feature.type === 'header') {
      return (
        <span className="col-span-2 mb-2 mt-4 block text-lg font-bold">
          {feature.text}
        </span>
      )
    }
    return (
      <>
        <CheckIcon
          className="h-6 w-5 flex-none text-indigo-600"
          aria-hidden="true"
        />
        {feature.text[frequency.value]}
      </>
    )
  }

  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-7 text-indigo-600">
            Create Token Package
          </h2>
        </div>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-5 gap-x-1 rounded-full p-1 text-center text-[10px] font-semibold leading-5 ring-1 ring-inset ring-gray-200 lg:text-xs"
            >
              {frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? 'bg-indigo-600 text-white' : 'text-gray-500',
                      'cursor-pointer rounded-full px-2.5 py-1',
                    )
                  }
                >
                  {option.label}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tokenTiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-2 ring-indigo-600'
                  : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8',
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-x-3">
                    {renderFeatureText(feature)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-7 text-indigo-600">
            Web3 Social Media Management Package{' '}
          </h2>
        </div>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequencySocMed}
              onChange={setFrequencySocMed}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
            >
              {frequenciesSocMed.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? 'bg-indigo-600 text-white' : 'text-gray-500',
                      'cursor-pointer rounded-full px-2.5 py-1',
                    )
                  }
                >
                  {option.label}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {socialMediaTiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-2 ring-indigo-600'
                  : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8',
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[frequencySocMed.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {frequencySocMed.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-x-3">
                    {renderFeatureText(feature)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
